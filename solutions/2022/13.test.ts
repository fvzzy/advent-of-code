import { problem2022_13_1, problem2022_13_2, title2022_13, balanceParens, compareLists } from "./13";

describe(`2022 day 13: "${title2022_13}"`, () => {
  describe("#balanceParens", () => {
    test("balances parentheses for two packets", () => {
      expect(balanceParens("[[1],[2,3,4]]", "[[1],4]")).toStrictEqual({ left: "[[1],[2,3,4]]", right: "[[1],[4]]" });
      expect(balanceParens("[9]", "[[8,7,6]]")).toStrictEqual({ left: "[[9]]", right: "[[8,7,6]]" });
    });
  });

  describe("#compareLists", () => {
    test("returns whether balanced lists are in the correct order", () => {
      expect(compareLists([1, 1, 3, 1, 1], [1, 1, 5, 1, 1])).toBe(true);
      expect(compareLists([[1], [2, 3, 4]], [[1], [4]])).toBe(true);
      expect(compareLists([[9]], [[8, 7, 6]])).toBe(false);
      expect(compareLists([[4, 4], 4, 4], [[4, 4], 4, 4, 4])).toBe(true);
      expect(compareLists([7, 7, 7, 7], [7, 7, 7])).toBe(false);
      expect(compareLists([], [3])).toBe(true);
      expect(compareLists([[[]]], [[]])).toBe(false);
      expect(compareLists([[]], [])).toBe(false);
      expect(compareLists([1, [2, [3, [4, [5, 6, 7]]]], 8, 9], [1, [2, [3, [4, [5, 6, 0]]]], 8, 9])).toBe(false);
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

    // test("part 2 solution works", () => {
    //   expect(problem2022_13_2(exampleInput)).toBe(undefined);
    // });
  });
});
