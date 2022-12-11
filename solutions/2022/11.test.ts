import { problem2022_11_1, problem2022_11_2, title2022_11 } from "./11";

describe(`2022 day 11: "${title2022_11}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "Monkey 0:",
      "  Starting items: 79, 98",
      "  Operation: new = old * 19",
      "  Test: divisible by 23",
      "    If true: throw to monkey 2",
      "    If false: throw to monkey 3",
      "",
      "Monkey 1:",
      "  Starting items: 54, 65, 75, 74",
      "  Operation: new = old + 6",
      "  Test: divisible by 19",
      "    If true: throw to monkey 2",
      "    If false: throw to monkey 0",
      "",
      "Monkey 2:",
      "  Starting items: 79, 60, 97",
      "  Operation: new = old * old",
      "  Test: divisible by 13",
      "    If true: throw to monkey 1",
      "    If false: throw to monkey 3",
      "",
      "Monkey 3:",
      "  Starting items: 74",
      "  Operation: new = old + 3",
      "  Test: divisible by 17",
      "    If true: throw to monkey 0",
      "    If false: throw to monkey 1",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_11_1(exampleInput)).toBe(10605);
    });

    test("part 2 solution works", () => {
      expect(problem2022_11_2(exampleInput)).toBe(2713310158);
    });
  });
});
