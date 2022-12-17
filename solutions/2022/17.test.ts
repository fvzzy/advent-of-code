import { problem2022_17_1, problem2022_17_2, title2022_17 } from "./17";

describe(`2022 day 17: "${title2022_17}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"];

    test("part 1 solution works", () => {
      expect(problem2022_17_1(exampleInput)).toBe(3068);
    });

    test("part 2 solution works", () => {
      expect(problem2022_17_2(exampleInput)).toBe(undefined);
    });
  });
});
