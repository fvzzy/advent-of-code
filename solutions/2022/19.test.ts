import { problem2022_19_1, problem2022_19_2, title2022_19 } from "./19";

describe(`2022 day 19: "${title2022_19}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.",
      "Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_19_1(exampleInput)).toBe(33);
    });

    test("part 2 solution works", () => {
      expect(problem2022_19_2(exampleInput)).toBe(undefined);
    });
  });
});
