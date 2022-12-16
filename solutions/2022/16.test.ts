import { problem2022_16_1, problem2022_16_2, title2022_16 } from "./16";

describe(`2022 day 16: "${title2022_16}"`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "Valve AA has flow rate=0; tunnels lead to valves DD, II, BB",
      "Valve BB has flow rate=13; tunnels lead to valves CC, AA",
      "Valve CC has flow rate=2; tunnels lead to valves DD, BB",
      "Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE",
      "Valve EE has flow rate=3; tunnels lead to valves FF, DD",
      "Valve FF has flow rate=0; tunnels lead to valves EE, GG",
      "Valve GG has flow rate=0; tunnels lead to valves FF, HH",
      "Valve HH has flow rate=22; tunnel leads to valve GG",
      "Valve II has flow rate=0; tunnels lead to valves AA, JJ",
      "Valve JJ has flow rate=21; tunnel leads to valve II",
    ];

    test("part 1 solution works", () => {
      expect(problem2022_16_1(exampleInput)).toBe(1651);
    });

    test("part 2 solution works", () => {
      expect(problem2022_16_2(exampleInput)).toBe(undefined);
    });
  });
});
