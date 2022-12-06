import { problem2022_1_1, problem2022_1_2, title2022_1 } from "./01";

describe(`2022 day 1: ${title2022_1}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "1000",
      "2000",
      "3000",
      "",
      "4000",
      "",
      "5000",
      "6000",
      "",
      "7000",
      "8000",
      "9000",
      "",
      "10000",
      "",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_1_1(exampleInput)).toBe(24000);
    });

    test("part 2 solution works", () => {
      expect(problem2022_1_2(exampleInput)).toBe(45000);
    });
  });
});
