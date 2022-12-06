// https://adventofcode.com/2022/day/6
export const title2022_6 = "tuning trouble";

export function problem2022_6_1(input: string[]) {
  const buffer = input[0].split("");
  const counts = {};
  for (let letter of "abcdefghijklmnopqrstuvwxyz") counts[letter] = 0;

  let markerLength = 4;
  let i = 0;
  for (let x = 0; x < markerLength; x++) counts[buffer[x]] += 1;

  while (i < buffer.length - markerLength - 1) {
    let hasDuplicates = false;
    for (let x = 0; x < markerLength; x++) {
      if (counts[buffer[i + x]] !== 1) {
        hasDuplicates = true;
        break;
      }
    }
    if (!hasDuplicates) return i + markerLength;
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

  while (i < buffer.length - markerLength - 1) {
    let hasDuplicates = false;
    for (let x = 0; x < markerLength; x++) {
      if (counts[buffer[i + x]] !== 1) {
        hasDuplicates = true;
        break;
      }
    }
    if (!hasDuplicates) return i + markerLength;
    counts[buffer[i]] -= 1;
    counts[buffer[i + markerLength]] += 1;
    i += 1;
  }
}
