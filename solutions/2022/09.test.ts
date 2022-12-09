import { problem2022_9_1, problem2022_9_2, title2022_9 } from "./09";

describe(`2022 day 9: "${title2022_9}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
    const exampleInput2 = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

    test("part 1 solution works", () => {
      expect(problem2022_9_1(exampleInput)).toBe(13);
    });

    test("part 2 solution works", () => {
      expect(problem2022_9_2(exampleInput)).toBe(1);
      expect(problem2022_9_2(exampleInput2)).toBe(36);
    });
  });
});
