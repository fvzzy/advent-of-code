// https://adventofcode.com/2022/day/16
export const title2022_16 = "proboscidea volcanium";

type ValveData = {
  flow: number;
  exits: string[];
};

function parseInput(input: string[]): { valves: Record<string, ValveData>; targetValves: Set<string> } {
  const valves = {};
  const targetValves: Set<string> = new Set();

  for (let line of input) {
    const match = [...line.matchAll(/([A-Z][A-Z]).*=(\d+)/g)].flat();
    const exits = line.match(/[A-Z][A-Z]/g).slice(1);
    const valve = match[1];
    const flow = Number(match[2]);
    if (flow !== 0) targetValves.add(valve);
    valves[valve] = { flow, exits };
  }

  return { valves, targetValves };
}

export function problem2022_16_1(input: string[]) {
  const { valves, targetValves } = parseInput(input);

  const opened: Set<string> = new Set();
  let currentFlowRate = 0;
  let maxPressureReleased = 0;

  // how many possible ways are there to open all useful valves?
  const dfs = (valve: string, minutes = 1, path = valve) => {
    if (minutes === 5) console.log(path); // exit also if we've visited all useful valves

    const { exits } = valves[valve];
    for (let exit of exits) {
      dfs(exit, minutes + 1, `${path}-${exit}`);
    }
  };

  dfs("AA");

  return maxPressureReleased;
}

export function problem2022_16_2(input: string[]) {}
