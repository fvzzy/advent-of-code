import { problem2021_7_1, problem2021_7_2, day, title } from "./07";

describe(`day ${day}: ${title}`, () => {
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
