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

export function problem2022_10_2(input: string[]) {
  const CRT_WIDTH = 40;
  const CRT_HEIGHT = 6;

  let linearRegister = Array(CRT_HEIGHT * CRT_WIDTH).fill(".");
  let x = 0;
  let cycle = 0;

  for (let instruction of input) {
    const arg = instruction.split(" ")[1];

    const offset = CRT_WIDTH * Math.floor((cycle + 1) / CRT_WIDTH);
    const spritePos = [1, 2, 3].map((regPos) => regPos + x + offset);

    cycle += 1;
    if (spritePos.includes(cycle)) linearRegister[cycle] = "#";

    if (arg) {
      cycle += 1;
      if (spritePos.includes(cycle)) linearRegister[cycle] = "#";
      x += Number(arg);
    }
  }

  linearRegister.shift(); // off by one somewhere
  linearRegister.push("."); // hacks to get around a half-baked solution

  const output = [];
  for (let i = 0; i < linearRegister.length; i += CRT_WIDTH) {
    output.push(linearRegister.slice(i, i + CRT_WIDTH).join(""));
  }

  return output;
}
