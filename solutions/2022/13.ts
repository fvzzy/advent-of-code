// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
type PacketData<T> = T | PacketData<T>[];
type NestedPacketData = PacketData<number>;

export function compareLists(left, right): boolean {
  for (let i = 0; i < left.length; i++) {
    if (Array.isArray(left[i]) && Array.isArray(right[i])) {
      return compareLists(left[i], right[i]);
    }
    if (!right[i] || left[i] > right[i]) return false;
  }
  return true;
}

export function balanceParens(left: string, right: string): Record<"left" | "right", string> {
  let i = 0;
  while (left[i]) {
    if (left[i] === "[" && /\d/.test(right[i])) {
      right = right.slice(0, i) + "[" + right.slice(i) + "]";
    } else if (right[i] === "[" && /\d/.test(left[i])) {
      left = left.slice(0, i) + "[" + left.slice(i) + "]";
    }
    i += 1;
  }
  return { left, right };
}

export function problem2022_13_1(input: string[]) {
  let pair = 0;
  let validIndicesSum = 0;

  for (let i = 0; i < input.length; i += 3) {
    pair += 1;
    const unbalancedLeft = input[i];
    const unbalancedRight = input[i + 1];
    const { left, right } = balanceParens(unbalancedLeft, unbalancedRight);

    // convert packet strings into arrays
    const leftArr = JSON.parse(left);
    const rightArr = JSON.parse(right);

    const valid = compareLists(leftArr, rightArr);
    if (valid) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {}
