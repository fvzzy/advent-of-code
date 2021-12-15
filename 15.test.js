import { problem15_1, problem15_2, day, title } from "./15.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "1163751742",
      "1381373672",
      "2136511328",
      "3694931569",
      "7463417111",
      "1319128137",
      "1359912421",
      "3125421639",
      "1293138521",
      "2311944581",
    ];

    test("part 1 solution works", () => {
      expect(problem15_1(exampleInput)).toBe(40);
    });

    // test("part 2 solution works", () => {
    //   expect(problem15_2(exampleInput)).toBe(undefined);
    // });
  });
});
