import { problem2022_14_1, problem2022_14_2, title2022_14 } from "./14";

describe(`2022 day 14: "${title2022_14}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["498,4 -> 498,6 -> 496,6", "503,4 -> 502,4 -> 502,9 -> 494,9"];

    test("part 1 solution works", () => {
      expect(problem2022_14_1(exampleInput)).toBe(24);
    });

    test("part 2 solution works", () => {
      expect(problem2022_14_2(exampleInput)).toBe(93);
    });
  });
});
