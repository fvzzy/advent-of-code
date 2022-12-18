import { problem2022_18_1, problem2022_18_2, title2022_18 } from "./18";

describe(`2022 day 18: "${title2022_18}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "1,1,1",
      "2,1,1",
      // "2,2,2",
      // "1,2,2",
      // "3,2,2",
      // "2,1,2",
      // "2,3,2",
      // "2,2,1",
      // "2,2,3",
      // "2,2,4",
      // "2,2,6",
      // "1,2,5",
      // "3,2,5",
      // "2,1,5",
      // "2,3,5",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_18_1(exampleInput)).toBe(64);
    });

    test("part 2 solution works", () => {
      expect(problem2022_18_2(exampleInput)).toBe(undefined);
    });
  });
});
