import { problem7_1, problem7_2, day, title } from "./07.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["16,1,2,0,4,2,7,1,2,14"];

    test("part 1 solution works", () => {
      expect(problem7_1(exampleInput)).toBe(37);
    });

    // test("part 2 solution works", () => {
    //   expect(problem7_2(exampleInput)).toBe(null);
    // });
  });
});
