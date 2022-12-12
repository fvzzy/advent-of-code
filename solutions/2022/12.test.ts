import { problem2022_12_1, problem2022_12_2, title2022_12 } from "./12";

describe(`2022 day 12: "${title2022_12}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];

    test("part 1 solution works", () => {
      expect(problem2022_12_1(exampleInput)).toBe(31);
    });

    test("part 2 solution works", () => {
      expect(problem2022_12_2(exampleInput)).toBe(29);
    });
  });
});
