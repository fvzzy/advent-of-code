import { problem2022_20_1, problem2022_20_2, title2022_20, cycle, mixOne, mix } from "./20";

describe(`2022 day 20: "${title2022_20}"`, () => {
  describe("#cycle", () => {
    test("returns the correct index when moving forwards", () => {
      expect(cycle(2, 12, 10)).toBe(4);
      expect(cycle(4, 1000, 7)).toBe(3);
      expect(cycle(4, 2000, 7)).toBe(2);
      expect(cycle(4, 3000, 7)).toBe(1);
    });

    test("returns the correct index when moving backwards", () => {
      expect(cycle(1, -3, 10)).toBe(8);
    });
  });

  describe("#mixOne", () => {
    test("shuffles numbers forward by the correct amount", () => {
      expect(mixOne(0, [1, 2, -3, 3, -2, 0, 4])).toStrictEqual([2, 1, -3, 3, -2, 0, 4]);
      expect(mixOne(0, [2, 1, -3, 3, -2, 0, 4])).toStrictEqual([1, -3, 2, 3, -2, 0, 4]);
      expect(mixOne(2, [1, 2, 3, -2, -3, 0, 4])).toStrictEqual([1, 2, -2, -3, 0, 3, 4]);
    });

    test("wraps numbers around when moving past the end of the list", () => {
      expect(mixOne(5, [1, 2, -3, 0, 3, 4, -2])).toStrictEqual([1, 2, -3, 4, 0, 3, -2]);
      expect(mixOne(1, [1, -3, 2, 3, -2, 0, 4])).toStrictEqual([1, 2, 3, -2, -3, 0, 4]);
      expect(mixOne(2, [1, 2, -2, -3, 0, 3, 4])).toStrictEqual([1, 2, -3, 0, 3, 4, -2]);
      expect(mixOne(4, [1, 5, -2, -3, 2, 3, 4])).toStrictEqual([1, 5, -2, -3, 3, 4, 2]);
    });
  });

  describe("#mix", () => {});

  describe.skip("example inputs", () => {
    const exampleInput = ["1", "2", "-3", "3", "-2", "0", "4"];

    test("part 1 solution works", () => {
      expect(problem2022_20_1(exampleInput)).toBe(3);
    });

    test("part 2 solution works", () => {
      expect(problem2022_20_2(exampleInput)).toBe(undefined);
    });
  });
});
