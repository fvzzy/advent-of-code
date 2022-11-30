import { problem14_1, problem14_2, day, title } from "./14";

describe(`day ${day}: ${title}`, () => {
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
      expect(problem14_1(exampleInput)).toBe(1588);
    });

    test("part 2 solution works", () => {
      expect(problem14_2(exampleInput)).toBe(2188189693529);
    });
  });
});
