// https://adventofcode.com/2022/day/6
export const title2022_6 = "tuning trouble";

export function problem2022_6_1(input: string[]) {
  const buffer = input[0].split("");
  const counts = {};
  for (let letter of "abcdefghijklmnopqrstuvwxyz") counts[letter] = 0;

  let i = 0;
  counts[buffer[i]] += 1;
  counts[buffer[i + 1]] += 1;
  counts[buffer[i + 2]] += 1;
  counts[buffer[i + 3]] += 1;

  while (i < buffer.length - 3) {
    if (
      counts[buffer[i]] === 1 &&
      counts[buffer[i + 1]] === 1 &&
      counts[buffer[i + 2]] === 1 &&
      counts[buffer[i + 3]] === 1
    ) {
      return i + 4;
    }
    counts[buffer[i]] -= 1;
    counts[buffer[i + 4]] += 1;
    i += 1;
  }
}

export function problem2022_6_2(input: string[]) {}
