import dayPadded from "./dayPadded.js";

export const p1Export = (year, day) => `problem${year}_${day}_1`;
export const p2Export = (year, day) => `problem${year}_${day}_2`;
export const titleExport = (year, day) => `title${year}_${day}`;

export const mainFileTemplate = (year, day, title) =>
  `// https://adventofcode.com/${year}/day/${day}
export const ${titleExport(year, day)} = "${title}"
  
export function ${p1Export(year, day)}(input: string[]) {}

export function ${p2Export(year, day)}(input: string[]) {}
`;

export const testFileTemplate = (year, day, title) =>
  `import { ${p1Export(year, day)}, ${p2Export(year, day)}, ${titleExport(year, day)} } from "./${dayPadded(day)}";

describe(\`${year} day ${day}: "\${${titleExport(year, day)}}"\`, () => {
  describe("example inputs", () => {
    const exampleInput = [];

    test("part 1 solution works", () => {
      expect(${p1Export(year, day)}(exampleInput)).toBe(undefined);
    });

    test("part 2 solution works", () => {
      expect(${p2Export(year, day)}(exampleInput)).toBe(undefined);
    });
  });
});
`;
