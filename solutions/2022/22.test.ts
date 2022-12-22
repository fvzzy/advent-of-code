import { problem2022_22_1, problem2022_22_2, title2022_22 } from "./22";

describe(`2022 day 22: "${title2022_22}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "        ...#",
      "        .#..",
      "        #...",
      "        ....",
      "...#.......#",
      "........#...",
      "..#....#....",
      "..........#.",
      "        ...#....",
      "        .....#..",
      "        .#......",
      "        ......#.",
      "",
      "10R5L5R10L4R5L5",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_22_1(exampleInput)).toBe(6032);
    });

    test("part 2 solution works", () => {
      expect(problem2022_22_2(exampleInput)).toBe(undefined);
    });
  });
});
