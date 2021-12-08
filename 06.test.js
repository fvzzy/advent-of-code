import { problem6_1, problem6_2, day, title } from "./06.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["3,4,3,1,2"];

    test("part 1 solution works", () => {
      expect(problem6_1(exampleInput)).toBe(5934);
    });

    test("part 2 solution works", () => {
      expect(problem6_2(exampleInput)).toBe(undefined);
    });
  });
});
