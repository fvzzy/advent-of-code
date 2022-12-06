import { problem2021_12_1, problem2021_12_2, title2021_12 } from "./12";

describe(`2021 day 12: ${title2021_12}`, () => {
  describe("example inputs", () => {
    const exampleInput1 = ["start-A", "start-b", "A-c", "A-b", "b-d", "A-end", "b-end"];

    const exampleInput2 = [
      "dc-end",
      "HN-start",
      "start-kj",
      "dc-start",
      "dc-HN",
      "LN-dc",
      "HN-end",
      "kj-sa",
      "kj-HN",
      "kj-dc",
    ];

    const exampleInput3 = [
      "fs-end",
      "he-DX",
      "fs-he",
      "start-DX",
      "pj-DX",
      "end-zg",
      "zg-sl",
      "zg-pj",
      "pj-he",
      "RW-he",
      "fs-DX",
      "pj-RW",
      "zg-RW",
      "start-pj",
      "he-WI",
      "zg-he",
      "pj-fs",
      "start-RW",
    ];

    test("part 1 solution works", () => {
      expect(problem2021_12_1(exampleInput1)).toBe(10);
      expect(problem2021_12_1(exampleInput2)).toBe(19);
      expect(problem2021_12_1(exampleInput3)).toBe(226);
    });

    test("part 2 solution works", () => {
      expect(problem2021_12_2(exampleInput1)).toBe(36);
      expect(problem2021_12_2(exampleInput2)).toBe(103);
      expect(problem2021_12_2(exampleInput3)).toBe(3509);
    });
  });
});
