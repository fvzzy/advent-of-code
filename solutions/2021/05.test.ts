import { problem2021_5_1, problem2021_5_2, title2021_5 } from "./05";

describe(`2021 day 5: ${title2021_5}`, () => {
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
      expect(problem2021_5_1(exampleInput)).toBe(5);
    });

    test("part 2 solution works", () => {
      expect(problem2021_5_2(exampleInput)).toBe(12);
    });
  });
});
