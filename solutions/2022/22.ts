// https://adventofcode.com/2022/day/22
export const title2022_22 = "monkey map";

function parseInput(input: string[]) {
  const notes = [...input];
  const instructions = notes
    .pop()
    .match(/(\d+\w)/g)
    .map((step) => [step[step.length - 1], Number(step.slice(0, step.length - 1))]);

  const map = {};
  for (let y = 0; y < notes.length - 1; y++) {
    for (let x = 0; x < notes[0].length; x++) {
      if (notes[y][x] !== " ") map[`${x + 1}_${y + 1}`] = notes[y][x]; // rows and cols start from 1
    }
  }

  return { map, instructions };
}

export function problem2022_22_1(input: string[]) {
  const { map, instructions } = parseInput(input);
}

export function problem2022_22_2(input: string[]) {}
