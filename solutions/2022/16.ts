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

  console.log(targetValves);

  // let currentFlowRate = 0;
  let maxPressureReleased = 0;

  // collect all unique ways to open all useful valves
  const paths = [];

  const dfs = (valve: string, minute = 1, targets = new Set(targetValves), path = valve) => {
    // exit if we've opened all useful valves, or time has elapsed
    console.log(targets, path);
    if (!targets.size) {
      paths.push(path);
      console.log(paths);
      return null;
    }
    if (minute === 30) return null;

    const remainingTargets = new Set(targets);
    remainingTargets.delete(valve);

    const { exits } = valves[valve];
    for (let exit of exits) {
      dfs(exit, minute + 1, remainingTargets, `${path}-${exit}`);
    }
  };

  dfs("AA");
  console.log(paths);
  // console.log(paths.filter((p) => p.length < 10).length); //

  return maxPressureReleased;
}

export function problem2022_16_2(input: string[]) {}
