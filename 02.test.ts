import { problem2_1, problem2_2, day, title } from "./02.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];

    test("part 1 solution works", () => {
      expect(problem2_1(exampleInput)).toBe(150);
    });

    test("part 2 solution works", () => {
      expect(problem2_2(exampleInput)).toBe(900);
    });
  });
});
