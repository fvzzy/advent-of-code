// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
type PacketData<T> = T | PacketData<T>[];
type NestedPacketData = PacketData<number>;

export function compareLists(left, right): boolean {
  for (let i = 0; i < left.length; i++) {
    if (!Array.isArray(left[i]) && !Array.isArray(right[i])) {
      if (!right[i] || left[i] > right[i]) return false;
    } else {
      if (!Array.isArray(left[i])) left[i] = [left[i]];
      if (!Array.isArray(right[i])) right[i] = [right[i]];
      return compareLists(left[i], right[i]);
    }
  }
  return true;
}

export function problem2022_13_1(input: string[]) {
  let pair = 0;
  let validIndicesSum = 0;

  for (let i = 0; i < input.length; i += 3) {
    pair += 1;
    const left = input[i];
    const right = input[i + 1];

    // convert packet strings into arrays
    const leftArr = JSON.parse(left);
    const rightArr = JSON.parse(right);

    const valid = compareLists(leftArr, rightArr);
    if (valid) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {}
