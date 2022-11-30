import { problem9_1, problem9_2, day, title } from "./09.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "2199943210",
      "3987894921",
      "9856789892",
      "8767896789",
      "9899965678",
    ];

    test("part 1 solution works", () => {
      expect(problem9_1(exampleInput)).toBe(15);
    });

    test("part 2 solution works", () => {
      expect(problem9_2(exampleInput)).toBe(1134);
    });
  });
});
