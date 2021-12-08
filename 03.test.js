import { problem3_1, problem3_2, day, title } from "./03.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];

    test("part 1 solution works", () => {
      expect(problem3_1(exampleInput)).toBe(198);
    });

    test("part 2 solution works", () => {
      expect(problem3_2(exampleInput)).toBe(230);
    });
  });
});
