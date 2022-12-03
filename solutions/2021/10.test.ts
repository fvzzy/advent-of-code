import { problem2021_10_1, problem2021_10_2, title } from "./10";

describe(`2021 day 10: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "[({(<(())[]>[[{[]{<()<>>",
      "[(()[<>])]({[<{<<[]>>(",
      "{([(<{}[<>[]}>{[]{[(<()>",
      "(((({<>}<{<{<>}{[]{[]{}",
      "[[<[([]))<([[{}[[()]]]",
      "[{[{({}]{}}([{[{{{}}([]",
      "{<[[]]>}<{[{[{[]{()[[[]",
      "[<(<(<(<{}))><([]([]()",
      "<{([([[(<>()){}]>(<<{{",
      "<{([{{}}[<[[[<>{}]]]>[]]",
    ];

    test("part 1 solution works", () => {
      expect(problem2021_10_1(exampleInput)).toBe(26397);
    });

    test("part 2 solution works", () => {
      expect(problem2021_10_2(exampleInput)).toBe(288957);
    });
  });
});
