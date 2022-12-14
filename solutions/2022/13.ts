// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
// type PacketData<T> = T | PacketData<T>[];
// type NestedPacketData = PacketData<number>;

export function compareValues(left, right): -1 | 0 | 1 {
  if (Number.isInteger(left) && Number.isInteger(right)) {
    return Math.sign(right - left) as -1 | 0 | 1;
  } else {
    if (!Array.isArray(left)) left = [left];
    if (!Array.isArray(right)) right = [right];

    for (let i = 0; i < Math.max(left.length, right.length); i++) {
      if (left[i] === undefined) return 1;
      if (right[i] === undefined) return -1;

      const result = compareValues(left[i], right[i]);
      if (result !== 0) return result; // i.e. only return if we have a definite true/false result
    }
    return 0; // inconclusive result after iterating through matched pairs
  }
}

export function problem2022_13_1(input: string[]) {
  let pair = 0;
  let validIndicesSum = 0;

  for (let i = 0; i < input.length; i += 3) {
    pair += 1;
    const leftStr = input[i];
    const rightStr = input[i + 1];

    // convert packet strings into arrays
    const left = JSON.parse(leftStr);
    const right = JSON.parse(rightStr);

    const valid = compareValues(left, right) === 1;
    if (valid) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {
  const dividers = [[[2]], [[6]]];
  const packets = input
    .filter(Boolean)
    .map((packet) => JSON.parse(packet))
    .concat(dividers)
    .sort(compareValues)
    .reverse(); // urgh, could reverse the comparator outputs but I think they make more sense this way

  return (packets.indexOf(dividers[0]) + 1) * (packets.indexOf(dividers[1]) + 1);
}
