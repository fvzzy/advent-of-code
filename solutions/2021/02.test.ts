import { problem2021_2_1, problem2021_2_2, title2021_2 } from "./02";

describe(`2021 day 2: ${title2021_2}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

    test("part 1 solution works", () => {
      expect(problem2021_2_1(exampleInput)).toBe(150);
    });

    test("part 2 solution works", () => {
      expect(problem2021_2_2(exampleInput)).toBe(900);
    });
  });
});
