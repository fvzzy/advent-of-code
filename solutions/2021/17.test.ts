import { problem2021_17_1, problem2021_17_2, day, title } from "./17";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["target area: x=20..30, y=-10..-5"];

    test("part 1 solution works", () => {
      expect(problem2021_17_1(exampleInput)).toBe(45);
    });

    test("part 2 solution works", () => {
      expect(problem2021_17_2(exampleInput)).toStrictEqual(112);
    });
  });
});
