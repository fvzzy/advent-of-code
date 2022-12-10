// https://adventofcode.com/2022/day/10
export const title2022_10 = "cathode-ray tube";

export function problem2022_10_1(input: string[]) {
  const SIGNIFICANT_CYCLES = [20, 60, 100, 140, 180, 220];

  let signalStrengthTotal = 0;
  let x = 1;
  let cycle = 1;

  const updateSignalStrength = () => {
    cycle += 1;
    if (SIGNIFICANT_CYCLES.includes(cycle)) signalStrengthTotal += cycle * x;
  };

  for (let instruction of input) {
    const arg = instruction.split(" ")[1];
    updateSignalStrength();

    if (arg) {
      x += Number(arg);
      updateSignalStrength();
    }
  }

  return signalStrengthTotal;
}

export function problem2022_10_2(input: string[]) {
  const CRT_WIDTH = 40;
  const CRT_HEIGHT = 6;

  const linearRegister = Array(CRT_HEIGHT * CRT_WIDTH).fill(".");
  let x = 1;
  let cycle = 0;

  const drawPixel = () => {
    if ([x - 1, x, x + 1].includes(cycle % 40)) linearRegister[cycle] = "#";
    cycle += 1;
  };

  for (let instruction of input) {
    const arg = instruction.split(" ")[1];
    drawPixel();

    if (arg) {
      drawPixel();
      x += Number(arg);
    }
  }

  const output = [];
  for (let i = 0; i < linearRegister.length; i += CRT_WIDTH) {
    output.push(linearRegister.slice(i, i + CRT_WIDTH).join(""));
  }

  return output;
}
