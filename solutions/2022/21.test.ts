import { problem2022_21_1, problem2022_21_2, title2022_21 } from "./21";

describe(`2022 day 21: "${title2022_21}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "root: pppw + sjmn",
      "dbpl: 5",
      "cczh: sllz + lgvd",
      "zczc: 2",
      "ptdq: humn - dvpt",
      "dvpt: 3",
      "lfqf: 4",
      "humn: 5",
      "ljgn: 2",
      "sjmn: drzm * dbpl",
      "sllz: 4",
      "pppw: cczh / lfqf",
      "lgvd: ljgn * ptdq",
      "drzm: hmdt - zczc",
      "hmdt: 32",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_21_1(exampleInput)).toBe(152);
    });

    test("part 2 solution works", () => {
      expect(problem2022_21_2(exampleInput)).toBe(301);
    });
  });
});
