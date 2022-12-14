import { problem2022_13_1, problem2022_13_2, title2022_13, compareValues } from "./13";

describe(`2022 day 13: "${title2022_13}"`, () => {
  describe("#compareValues", () => {
    test("returns whether values are in the correct order", () => {
      expect(compareValues([1, 1, 3, 1, 1], [1, 1, 5, 1, 1])).toBe(1);
      expect(compareValues([[1], [2, 3, 4]], [[1], 4])).toBe(1);
      expect(compareValues([9], [[8, 7, 6]])).toBe(-1);
      expect(compareValues([[4, 4], 4, 4], [[4, 4], 4, 4, 4])).toBe(1);
      expect(compareValues([7, 7, 7, 7], [7, 7, 7])).toBe(-1);
      expect(compareValues([], [3])).toBe(1);
      expect(compareValues([[[]]], [[]])).toBe(-1);
      expect(compareValues([1, [2, [3, [4, [5, 6, 7]]]], 8, 9], [1, [2, [3, [4, [5, 6, 0]]]], 8, 9])).toBe(-1);
    });
  });

  describe("example inputs", () => {
    const exampleInput = [
      "[1,1,3,1,1]",
      "[1,1,5,1,1]",
      "",
      "[[1],[2,3,4]]",
      "[[1],4]",
      "",
      "[9]",
      "[[8,7,6]]",
      "",
      "[[4,4],4,4]",
      "[[4,4],4,4,4]",
      "",
      "[7,7,7,7]",
      "[7,7,7]",
      "",
      "[]",
      "[3]",
      "",
      "[[[]]]",
      "[[]]",
      "",
      "[1,[2,[3,[4,[5,6,7]]]],8,9]",
      "[1,[2,[3,[4,[5,6,0]]]],8,9]",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_13_1(exampleInput)).toBe(13);
    });

    test.skip("part 2 solution works", () => {
      expect(problem2022_13_2(exampleInput)).toBe(140);
    });
  });
});
