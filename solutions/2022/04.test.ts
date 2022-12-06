import { problem2022_4_1, problem2022_4_2, title2022_4 } from "./04";

describe(`2022 day 4: ${title2022_4}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"];

    test("part 1 solution works", () => {
      expect(problem2022_4_1(exampleInput)).toBe(2);
    });

    test("part 2 solution works", () => {
      expect(problem2022_4_2(exampleInput)).toBe(4);
    });
  });
});
