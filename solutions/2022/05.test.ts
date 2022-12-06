import { problem2022_5_1, problem2022_5_2, title2022_5 } from "./05";

describe(`2022 day 5: ${title2022_5}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "    [D]    ",
      "[N] [C]    ",
      "[Z] [M] [P]",
      " 1   2   3 ",
      "",
      "move 1 from 2 to 1",
      "move 3 from 1 to 3",
      "move 2 from 2 to 1",
      "move 1 from 1 to 2",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_5_1(exampleInput)).toBe("CMZ");
    });

    test("part 2 solution works", () => {
      expect(problem2022_5_2(exampleInput)).toBe("MCD");
    });
  });
});
