import { problem2021_21_1, problem2021_21_2, day, title } from "./21";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = ["Player 1 starting position: 4", "Player 2 starting position: 8"];

    test("part 1 solution works", () => {
      expect(problem2021_21_1(exampleInput)).toBe(739785);
    });

    test("part 2 solution works", () => {
      expect(problem2021_21_2(exampleInput)).toBe(444356092776315);
    });
  });
});
