import dayPadded from "./dayPadded.js";

export const mainFileTemplate = (year, day, title) =>
  `/* ${year} day ${day} */
export const title = "${title}";
  
export function problem${year}_${day}_1(input: string[]) {}

export function problem${year}_${day}_2(input: string[]) {}
`;

export const testFileTemplate = (year, day) =>
  `import { problem${year}_${day}_1, problem${year}_${day}_2, title } from "./${dayPadded(day)}";

describe(\`${year} day ${day}: \${title}\`, () => {
  describe("example inputs", () => {
    const exampleInput = [];

    test("part 1 solution works", () => {
      expect(problem${year}_${day}_1(exampleInput)).toBe(undefined);
    });

    test("part 2 solution works", () => {
      expect(problem${year}_${day}_2(exampleInput)).toBe(undefined);
    });
  });
});
`;
