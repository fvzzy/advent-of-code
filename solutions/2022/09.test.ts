import { problem2022_9_1, problem2022_9_2, title2022_9 } from "./09";

describe(`2022 day 9: "${title2022_9}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];

    test("part 1 solution works", () => {
      expect(problem2022_9_1(exampleInput)).toBe(13);
    });

    test("part 2 solution works", () => {
      expect(problem2022_9_2(exampleInput)).toBe(undefined);
    });
  });
});
