import { problem2021_11_1, problem2021_11_2, step, day, title } from "./11";

describe(`day ${day}: ${title}`, () => {
  describe("#step", () => {
    let subExampleInput;
    beforeEach(() => {
      subExampleInput = [
        [1, 1, 1, 1, 1],
        [1, 9, 9, 9, 1],
        [1, 9, 1, 9, 1],
        [1, 9, 9, 9, 1],
        [1, 1, 1, 1, 1],
      ];
    });

    test("returns the expected next states", () => {
      expect(step(subExampleInput).octopi).toStrictEqual([
        [3, 4, 5, 4, 3],
        [4, 0, 0, 0, 4],
        [5, 0, 0, 0, 5],
        [4, 0, 0, 0, 4],
        [3, 4, 5, 4, 3],
      ]);

      expect(step(subExampleInput).octopi).toStrictEqual([
        [4, 5, 6, 5, 4],
        [5, 1, 1, 1, 5],
        [6, 1, 1, 1, 6],
        [5, 1, 1, 1, 5],
        [4, 5, 6, 5, 4],
      ]);
    });

    test("returns the correct number of flashes", () => {
      expect(step(subExampleInput).flashes).toBe(9);
    });
  });

  describe("example inputs", () => {
    const exampleInput = [
      "5483143223",
      "2745854711",
      "5264556173",
      "6141336146",
      "6357385478",
      "4167524645",
      "2176841721",
      "6882881134",
      "4846848554",
      "5283751526",
    ];

    test("part 1 solution works", () => {
      expect(problem2021_11_1(exampleInput)).toBe(1656);
    });

    test("part 2 solution works", () => {
      expect(problem2021_11_2(exampleInput)).toBe(195);
    });
  });
});
