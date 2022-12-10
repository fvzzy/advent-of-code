// https://adventofcode.com/2022/day/10
export const title2022_10 = "cathode-ray tube";

export function problem2022_10_1(input: string[]) {
  const SIGNIFICANT_CYCLES = [20, 60, 100, 140, 180, 220];

  let signalStrengthTotal = 0;
  let x = 1;
  let cycle = 1;

  for (let instruction of input) {
    const arg = instruction.split(" ")[1];

    cycle += 1;
    if (SIGNIFICANT_CYCLES.includes(cycle)) signalStrengthTotal += cycle * x;

    if (arg) {
      cycle += 1;
      x += Number(arg);
      if (SIGNIFICANT_CYCLES.includes(cycle)) signalStrengthTotal += cycle * x;
    }
  }

  return signalStrengthTotal;
}

export function problem2022_10_2(input: string[]) {}
