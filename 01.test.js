import { problem1_1, problem1_2 } from "./01.js";

describe("day 1: sonar sweep", () => {
  describe("example inputs", () => {
    const exampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    test("part 1 solution works", () => {
      expect(problem1_1(exampleInput)).toBe(7);
    });

    test("part 2 solution works", () => {
      expect(problem1_2(exampleInput)).toBe(5);
    });
  });
});
