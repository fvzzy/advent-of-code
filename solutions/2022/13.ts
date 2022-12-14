// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
type PacketData<T> = T | PacketData<T>[];
type NestedPacketData = PacketData<number>;

export function compareValues(left, right): -1 | 0 | 1 {
  if (Number.isInteger(left) && Number.isInteger(right)) {
    return Math.sign(right - left) as -1 | 0 | 1;
  } else {
    if (!Array.isArray(left)) left = [left];
    if (!Array.isArray(right)) right = [right];

    for (let i = 0; i < Math.max(left.length, right.length); i++) {
      if (left[i] === undefined) return 1;
      if (right[i] === undefined) return -1;

      const valid = compareValues(left[i], right[i]);
      if (valid) return valid; // i.e. only return if we have a definite true/false result
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

    const valid = compareValues(left, right);
    if (valid === 1) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {
  input.push("[[2]]", "[[6]]");
  const packets = input.filter(Boolean);
  //   console.log(packets); // seems ok

  packets.sort((a, b) => {
    // console.log(a, b, compareLists(a, b)); // this also seems to be correct
    return compareLists(a, b) ? 0 : 1;
  });

  //   console.log(packets); // Array.sort doesn't seem to be affecting the order here?
  return (packets.indexOf("[[2]]") + 1) * (packets.indexOf("[[6]]") + 1);
}
