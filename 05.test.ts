import { problem5_1, problem5_2, day, title } from "./05";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "0,9 -> 5,9",
      "8,0 -> 0,8",
      "9,4 -> 3,4",
      "2,2 -> 2,1",
      "7,0 -> 7,4",
      "6,4 -> 2,0",
      "0,9 -> 2,9",
      "3,4 -> 1,4",
      "0,0 -> 8,8",
      "5,5 -> 8,2",
    ];

    test("part 1 solution works", () => {
      expect(problem5_1(exampleInput)).toBe(5);
    });

    test("part 2 solution works", () => {
      expect(problem5_2(exampleInput)).toBe(12);
    });
  });
});
