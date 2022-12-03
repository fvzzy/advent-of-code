import { problem2021_14_1, problem2021_14_2 } from "./14";

describe(`2021 day 14: "extended polymerization"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "NNCB",
      "",
      "CH -> B",
      "HH -> N",
      "CB -> H",
      "NH -> C",
      "HB -> C",
      "HC -> B",
      "HN -> C",
      "NN -> C",
      "BH -> H",
      "NC -> B",
      "NB -> B",
      "BN -> B",
      "BB -> N",
      "BC -> B",
      "CC -> N",
      "CN -> C",
    ];

    test("part 1 solution works", () => {
      expect(problem2021_14_1(exampleInput)).toBe(1588);
    });

    test("part 2 solution works", () => {
      expect(problem2021_14_2(exampleInput)).toBe(2188189693529);
    });
  });
});
