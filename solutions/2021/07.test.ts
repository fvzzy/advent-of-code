import { problem2021_7_1, problem2021_7_2, title2021_7 } from "./07";

describe(`2021 day 7: ${title2021_7}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["16,1,2,0,4,2,7,1,2,14"];

    test("part 1 solution works", () => {
      expect(problem2021_7_1(exampleInput)).toBe(37);
    });

    test("part 2 solution works", () => {
      expect(problem2021_7_2(exampleInput)).toBe(168);
    });
  });
});
