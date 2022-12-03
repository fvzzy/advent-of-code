import { problem2022_2_1, problem2022_2_2 } from "./02";

describe(`2022 day 2: "rock paper scissors"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["A Y", "B X", "C Z"];

    test("part 1 solution works", () => {
      expect(problem2022_2_1(exampleInput)).toBe(15);
    });

    test("part 2 solution works", () => {
      expect(problem2022_2_2(exampleInput)).toBe(12);
    });
  });
});
