import { problem2021_23_1, problem2021_23_2, title2021_23 } from "./23";

describe.skip(`2021 day 23: ${title2021_23}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["#############", "#...........#", "###B#C#B#D###", "  #A#D#C#A#  ", "  #########  ", ""];

    test("part 1 solution works", () => {
      expect(problem2021_23_1(exampleInput)).toBe(12521);
    });

    test("part 2 solution works", () => {
      expect(problem2021_23_2(exampleInput)).toBe(undefined);
    });
  });
});
