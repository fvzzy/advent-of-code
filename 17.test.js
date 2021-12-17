import { problem17_1, problem17_2, day, title } from "./17.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["target area: x=20..30, y=-10..-5"];

    test("part 1 solution works", () => {
      expect(problem17_1(exampleInput)).toBe(45);
    });

    // test("part 2 solution works", () => {
    //   expect(problem17_2(exampleInput)).toBe(undefined);
    // });
  });
});
