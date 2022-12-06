import { problem2022_6_1, problem2022_6_2, title2022_6 } from "./06";

describe(`2022 day 6: "${title2022_6}"`, () => {
  describe("example inputs", () => {
    const exampleInput1 = ["mjqjpqmgbljsphdztnvjfqwrcgsmlb"];
    const exampleInput2 = ["bvwbjplbgvbhsrlpgdmjqwftvncz"];
    const exampleInput3 = ["nppdvjthqldpwncqszvftbrmjlhg"];
    const exampleInput4 = ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"];
    const exampleInput5 = ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];

    test("part 1 solution works", () => {
      expect(problem2022_6_1(exampleInput1)).toBe(7);
      expect(problem2022_6_1(exampleInput2)).toBe(5);
      expect(problem2022_6_1(exampleInput3)).toBe(6);
      expect(problem2022_6_1(exampleInput4)).toBe(10);
      expect(problem2022_6_1(exampleInput5)).toBe(11);
    });

    test("part 2 solution works", () => {
      expect(problem2022_6_2(exampleInput1)).toBe(19);
      expect(problem2022_6_2(exampleInput2)).toBe(23);
      expect(problem2022_6_2(exampleInput3)).toBe(23);
      expect(problem2022_6_2(exampleInput4)).toBe(29);
      expect(problem2022_6_2(exampleInput5)).toBe(26);
    });
  });
});
