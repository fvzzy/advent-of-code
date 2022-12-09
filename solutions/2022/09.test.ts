import { problem2022_9_1, problem2022_9_2, title2022_9 } from "./09";

describe(`2022 day 9: "${title2022_9}"`, () => {
  describe("example inputs", () => {
    const exampleInput = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
    const exampleInput2 = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

    test("part 1 solution works", () => {
      expect(problem2022_9_1(exampleInput)).toBe(13);
    });

    const expectedTailPositions = [
      "0-0",
      "1-1",
      "2-2",
      "1-3",
      "2-4",
      "3-5",
      "4-5",
      "5-5",
      "6-4",
      "7-3",
      "8-2",
      "9-1",
      "10-0",
      "9--1",
      "8--2",
      "7--3",
      "6--4",
      "5--5",
      "4--5",
      "3--5",
      "2--5",
      "1--5",
      "0--5",
      "-1--5",
      "-2--5",
      "-3--4",
      "-4--3",
      "-5--2",
      "-6--1",
      "-7-0",
      "-8-1",
      "-9-2",
      "-10-3",
      "-11-4",
      "-11-5",
      "-11-6",
    ];

    const expected = new Set([...expectedTailPositions]);

    test("part 2 solution works", () => {
      expect(problem2022_9_2(exampleInput)).toBe(1);
      // expect(expected.size).toBe(36);
      // expect(problem2022_9_2(exampleInput2)).toBe(expected);
      expect(problem2022_9_2(exampleInput2)).toBe(36);
    });
  });
});
