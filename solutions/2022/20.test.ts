import { problem2022_20_1, problem2022_20_2, title2022_20 } from "./20";

describe(`2022 day 20: "${title2022_20}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["1", "2", "-3", "3", "-2", "0", "4"];

    test("part 1 solution works", () => {
      expect(problem2022_20_1(exampleInput)).toBe(3);
    });

    test("part 2 solution works", () => {
      expect(problem2022_20_2(exampleInput)).toBe(undefined);
    });
  });
});
