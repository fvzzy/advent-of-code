import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import dayPadded from "./dayPadded.js";
import { mainFileTemplate, testFileTemplate, p1Export, p2Export, titleExport } from "./fileTemplates.js";

const SOLUTIONS_ROOT = "./solutions";
const SOLUTIONS_FILE = `${SOLUTIONS_ROOT}/solutions.js`;

export default function addSolutionFiles(year, day, title = "") {
  const dir = `${SOLUTIONS_ROOT}/${year}`;
  if (!existsSync(dir)) mkdirSync(dir);

  const mainFilePath = `${dir}/${dayPadded(day)}.ts`;
  const testFilePath = `${dir}/${dayPadded(day)}.test.ts`;

  if (existsSync(mainFilePath) || existsSync(testFilePath)) {
    console.error(`There are already solution file(s) for ${year} day ${day}.`);
    process.exit(1);
  }

  writeFileSync(mainFilePath, mainFileTemplate(year, day, title));
  writeFileSync(testFilePath, testFileTemplate(year, day, title));
  updateSolutionsIndex(year, day);
}

export function updateSolutionsIndex(year, day) {
  const p1 = p1Export(year, day);
  const p2 = p2Export(year, day);
  const title = titleExport(year, day);

  const solutionsFile = readFileSync(SOLUTIONS_FILE).toString("utf-8");
  const newImportLine = `import { ${p1}, ${p2}, ${title} } from "../dist/${year}/${dayPadded(day)}.js";`;
  const newExportLine = `"${year}_${day}": { p1: ${p1}, p2: ${p2}, title: ${title} },`;
  const newSolutionsFile = solutionsFile
    .replace("};", `  ${newExportLine}\n};`)
    .replace("\nexport", `${newImportLine}\n\nexport`);

  writeFileSync(SOLUTIONS_FILE, newSolutionsFile);
}
