import { problem2021_6_1, problem2021_6_2 } from "./06";

describe(`2021 day 6: "lanternfish" `, () => {
  describe("example inputs", () => {
    const exampleInput = ["3,4,3,1,2"];

    test("part 1 solution works", () => {
      expect(problem2021_6_1(exampleInput)).toBe(5934);
    });

    test("part 2 solution works", () => {
      expect(problem2021_6_2(exampleInput)).toBe(26984457539);
    });
  });
});
