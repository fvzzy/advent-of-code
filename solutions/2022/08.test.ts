import { problem2022_8_1, problem2022_8_2, title2022_8 } from "./08";

describe(`2022 day 8: "${title2022_8}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["30373", "25512", "65332", "33549", "35390"];

    test("part 1 solution works", () => {
      expect(problem2022_8_1(exampleInput)).toBe(21);
    });

    test("part 2 solution works", () => {
      expect(problem2022_8_2(exampleInput)).toBe(8);
    });
  });
});
