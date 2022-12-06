// https://adventofcode.com/2022/day/6
export const title2022_6 = "tuning trouble";

export function problem2022_6_1(input: string[]) {
  const buffer = input[0].split("");
  const counts = {};
  for (let letter of "abcdefghijklmnopqrstuvwxyz") counts[letter] = 0;

  let markerLength = 4;
  let i = 0;
  for (let x = 0; x < markerLength; x++) counts[buffer[x]] += 1;

  while (i < buffer.length - 3) {
    if (
      counts[buffer[i]] === 1 &&
      counts[buffer[i + 1]] === 1 &&
      counts[buffer[i + 2]] === 1 &&
      counts[buffer[i + 3]] === 1
    ) {
      return i + markerLength;
    }
    counts[buffer[i]] -= 1;
    counts[buffer[i + markerLength]] += 1;
    i += 1;
  }
}

export function problem2022_6_2(input: string[]) {
  const buffer = input[0].split("");
  const counts = {};
  for (let letter of "abcdefghijklmnopqrstuvwxyz") counts[letter] = 0;

  let markerLength = 14;
  let i = 0;
  for (let x = 0; x < markerLength; x++) counts[buffer[x]] += 1;

  while (i < buffer.length - 13) {
    if (
      counts[buffer[i]] === 1 &&
      counts[buffer[i + 1]] === 1 &&
      counts[buffer[i + 2]] === 1 &&
      counts[buffer[i + 3]] === 1 &&
      counts[buffer[i + 4]] === 1 &&
      counts[buffer[i + 5]] === 1 &&
      counts[buffer[i + 6]] === 1 &&
      counts[buffer[i + 7]] === 1 &&
      counts[buffer[i + 8]] === 1 &&
      counts[buffer[i + 9]] === 1 &&
      counts[buffer[i + 10]] === 1 &&
      counts[buffer[i + 11]] === 1 &&
      counts[buffer[i + 12]] === 1 &&
      counts[buffer[i + 13]] === 1
    ) {
      return i + markerLength;
    }
    counts[buffer[i]] -= 1;
    counts[buffer[i + markerLength]] += 1;
    i += 1;
  }
}
