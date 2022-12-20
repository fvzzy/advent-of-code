// https://adventofcode.com/2022/day/20
export const title2022_20 = "grove positioning system";

export function cycle(idx: number, move: number, arrLength: number) {
  if (move === 0) return idx;
  else if (move > 0) return (idx + move) % arrLength;
  else return (idx + move) % arrLength;
}

export function mixOne(idx: number, numbers: number[]): number[] {
  const mixed = [...numbers];
  const cut = mixed.splice(idx, 1)[0];

  if (cut == 0) return mixed;
  let newIdx: number;

  if (cut > 0) {
    if (cut + idx > numbers.length - 1) {
      newIdx = (cut + idx + 1) % numbers.length;
    } else {
      newIdx = (cut + idx) % numbers.length;
    }
  } else if (cut < 0) {
    if (cut + idx === 0) {
      newIdx = numbers.length - 1;
    } else if (cut + idx < 0) {
      newIdx = (cut + idx) % numbers.length;
    } else {
      newIdx = (cut + idx) % numbers.length;
    }
  }

  mixed.splice(newIdx, 0, cut);
  return mixed;
}

export function mix(numbers: number[]): number[] {
  const mixedNumbers = [...numbers];
  return mixedNumbers;
}

export function problem2022_20_1(input: string[]) {
  const numbers = input.map(Number);
}

export function problem2022_20_2(input: string[]) {}
