import { problem2021_3_1, problem2021_3_2, title2021_3 } from "./03";

describe(`2021 day 3: ${title2021_3}`, () => {
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
      expect(problem2021_3_1(exampleInput)).toBe(198);
    });

    test("part 2 solution works", () => {
      expect(problem2021_3_2(exampleInput)).toBe(230);
    });
  });
});
