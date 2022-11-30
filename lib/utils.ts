import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";

const dayPadded = (day) => day.toString().padStart(2, "0");

export async function getInput(year, day) {
  const inputDir = "./inputs";
  const inputFile = `${inputDir}/${year}-${dayPadded(day)}.txt`;

  if (existsSync(inputFile)) {
    return readFileSync(inputFile).toString("utf-8");
  }

  if (!existsSync(inputDir)) mkdirSync(inputDir);

  if (!process.env.SESSION_TOKEN) {
    console.error("Set a session token in .env to fetch your puzzle inputs.");
    process.exit(1);
  }

  const opts = { headers: { cookie: `session=${process.env.SESSION_TOKEN}` } };
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const res = await fetch(url, opts);
  const input = await res.text();

  writeFileSync(inputFile, input);
  return input;
}

export function addSolutionFiles(day, title = "") {
  const mainFilePath = `${dayPadded(day)}.js`;
  const testFilePath = `${dayPadded(day)}.test.js`;
  const solutionsFilePath = "./lib/solutions.js";

  if (existsSync(mainFilePath) || existsSync(testFilePath)) {
    console.error(`There are already solution file(s) for day ${day}.`);
    process.exit(1);
  }

  const mainFileTemplate = `export const day = ${day};
export const title = "${title}";
  
export function problem${day}_1(input) {}

export function problem${day}_2(input) {}
`;

  const testFileTemplate = `import { problem${day}_1, problem${day}_2, day, title } from "./${mainFilePath}";

describe(\`day \${day}: \${title}\`, () => {
  describe("example inputs", () => {
    const exampleInput = [];

    test("part 1 solution works", () => {
      expect(problem${day}_1(exampleInput)).toBe(undefined);
    });

    test("part 2 solution works", () => {
      expect(problem${day}_2(exampleInput)).toBe(undefined);
    });
  });
});
`;

  writeFileSync(mainFilePath, mainFileTemplate);
  writeFileSync(testFilePath, testFileTemplate);

  let solutionsFile = readFileSync(solutionsFilePath).toString("utf-8");
  let newImportLine = `import { problem${day}_1, problem${day}_2, title as title${day} } from "../${mainFilePath}";`;
  let newExportLine = `${day}: { problem1: problem${day}_1, problem2: problem${day}_2, title: title${day} },`;
  let newSolutionsFile = solutionsFile
    // consider rewriting this with a more robust regex replacement
    .replace("};", `  ${newExportLine}\n};`)
    .replace("\nexport", `${newImportLine}\n\nexport`);
  writeFileSync(solutionsFilePath, newSolutionsFile);
}
