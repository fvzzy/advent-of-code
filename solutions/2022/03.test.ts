import { problem2022_3_1, problem2022_3_2, title2022_3 } from "./03";

describe(`2022 day 3: ${title2022_3}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_3_1(exampleInput)).toBe(157);
    });

    test("part 2 solution works", () => {
      expect(problem2022_3_2(exampleInput)).toBe(70);
    });
  });
});
