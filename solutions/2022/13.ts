// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
type PacketData<T> = T | PacketData<T>[];
type NestedPacketData = PacketData<number>;

export function compareLists(left, right): boolean {
  // TODO: figure out why this initial mess doesn't work
  //   for (let i = 0; i < left.length; i++) {
  //     if (!Array.isArray(left[i]) && !Array.isArray(right[i])) {
  //       if (left[i] > right[i]) return false;
  //     } else if (Array.isArray(left[i]) && !Array.isArray(right[i])) {
  //       return compareLists(left[i], [right[i]]);
  //     } else if (!Array.isArray(left[i]) && Array.isArray(right[i])) {
  //       return compareLists([left[i]], right[i]);
  //     } else {
  //       return compareLists(left[i], right[i]);
  //     }
  //   }
  //   return left.length <= right.length;

  while (left.length && right.length) {
    let l = left.shift();
    let r = right.shift();

    if (!Array.isArray(l) && !Array.isArray(r)) {
      if (l > r) return false;
      if (l < r) return true;
    } else {
      if (!Array.isArray(l)) l = [l];
      if (!Array.isArray(r)) r = [r];
      const valid = compareLists(l, r);
      if (typeof valid === "boolean") return valid;
    }
  }

  if (left.length) return false;
  if (right.length) return true;
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

    const valid = compareLists(left, right);
    if (valid) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {
  input.push("[[2]]", "[[6]]");

  const packets = input
    .map((packet) => packet.replace("[]", "[0]"))
    .map((packet) => packet.replace(/\[|\]|,/g, ""))
    .filter(Boolean)
    .sort();

  console.log(packets);

  return (packets.indexOf("2") + 1) * (packets.indexOf("6") + 1);
}
