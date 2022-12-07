import { problem2022_7_1, problem2022_7_2, title2022_7 } from "./07";

describe(`2022 day 7: "${title2022_7}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "$ cd /",
      "$ ls",
      "dir a",
      "14848514 b.txt",
      "8504156 c.dat",
      "dir d",
      "$ cd a",
      "$ ls",
      "dir e",
      "29116 f",
      "2557 g",
      "62596 h.lst",
      "$ cd e",
      "$ ls",
      "584 i",
      "$ cd ..",
      "$ cd ..",
      "$ cd d",
      "$ ls",
      "4060174 j",
      "8033020 d.log",
      "5626152 d.ext",
      "7214296 k",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_7_1(exampleInput)).toBe(95437);
    });

    test("part 2 solution works", () => {
      expect(problem2022_7_2(exampleInput)).toBe(24933642);
    });
  });
});
