import { problem10_1, problem10_2, day, title } from "./10.js";

describe(`day ${day}: ${title}`, () => {
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
      expect(problem10_1(exampleInput)).toBe(26397);
    });

    // test("part 2 solution works", () => {
    //   expect(problem10_2(exampleInput)).toBe(undefined);
    // });
  });
});
