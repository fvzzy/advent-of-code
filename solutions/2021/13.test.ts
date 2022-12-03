import { problem2021_13_1, problem2021_13_2, day, title } from "./13";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "6,10",
      "0,14",
      "9,10",
      "0,3",
      "10,4",
      "4,11",
      "6,0",
      "6,12",
      "4,1",
      "0,13",
      "10,12",
      "3,4",
      "3,0",
      "8,4",
      "1,10",
      "2,14",
      "8,10",
      "9,0",
      "",
      "fold along y=7",
      "fold along x=5",
    ];

    test("part 1 solution works", () => {
      expect(problem2021_13_1(exampleInput)).toBe(17);
    });

    test("part 2 solution works", () => {
      expect(problem2021_13_2(exampleInput)).toStrictEqual([
        ["#", "#", "#", "#", "#"],
        ["#", ".", ".", ".", "#"],
        ["#", ".", ".", ".", "#"],
        ["#", ".", ".", ".", "#"],
        ["#", "#", "#", "#", "#"],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
      ]);
    });
  });
});
