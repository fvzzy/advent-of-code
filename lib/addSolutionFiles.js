import { existsSync, readFileSync, writeFileSync } from "fs";
import dayPadded from "./dayPadded.js";
import { mainFileTemplate, testFileTemplate, p1Export, p2Export, titleExport } from "./fileTemplates.js";

const SOLUTIONS_DIR = "./solutions/";
const SOLUTIONS_FILE = `${SOLUTIONS_DIR}/solutions.js`;

export default function addSolutionFiles(year, day, title = "") {
  const mainFilePath = `${SOLUTIONS_DIR}${year}/${dayPadded(day)}.ts`;
  const testFilePath = `${SOLUTIONS_DIR}${year}/${dayPadded(day)}.test.ts`;

  if (existsSync(mainFilePath) || existsSync(testFilePath)) {
    console.error(`There are already solution file(s) for ${year} day ${day}.`);
    process.exit(1);
  }

  writeFileSync(mainFilePath, mainFileTemplate(year, day, title));
  writeFileSync(testFilePath, testFileTemplate(year, day, title));
  updateSolutionsIndex(year, day);
}

export function updateSolutionsIndex(year, day) {
  const solutionsFile = readFileSync(SOLUTIONS_FILE).toString("utf-8");
  const newImportLine = `import { ${p1Export(year, day)}, ${p2Export(year, day)}, ${titleExport(
    year,
    day
  )} } from "../dist/${year}/${dayPadded(day)}.js";`;
  const newExportLine = `"${year}_${day}": { p1: ${p1Export(year, day)}, p2: ${p2Export(
    year,
    day
  )}, title: ${titleExport(year, day)} },`;
  const newSolutionsFile = solutionsFile
    .replace("};", `  ${newExportLine}\n};`)
    .replace("\nexport", `${newImportLine}\n\nexport`);

  writeFileSync(SOLUTIONS_FILE, newSolutionsFile);
}
