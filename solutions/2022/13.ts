// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// TODO: figure out how to represent nested arrays properly
type PacketData<T> = T | PacketData<T>[];
type NestedPacketData = PacketData<number>;

export function compareLists(left, right): boolean {
  for (let i = 0; i < left.length; i++) {
    let l = left[i];
    let r = right[i];

    // handle right running out of items
    if (typeof r === "undefined") return false;

    if (!Array.isArray(l) && !Array.isArray(r)) {
      // exit at first element out of order in lists
      if (l > r) return false;
      if (l < r) return true;
    } else {
      // convert singe integers to to an array
      if (typeof l === "number") l = [l];
      if (typeof r === "number") r = [r];
      const valid = compareLists(l, r);

      // ignore cases where we exit with `undefined`, i.e. lists are equal length
      if (typeof valid !== "undefined") return valid;
    }
  }

  if (left.length > right.length) return false;
  if (left.length < right.length) return true;
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
  const packets = input.filter(Boolean);
  //   console.log(packets); // seems ok

  packets.sort((a, b) => {
    // console.log(a, b, compareLists(a, b)); // this also seems to be correct
    return compareLists(a, b) ? 0 : 1;
  });

  //   console.log(packets); // Array.sort doesn't seem to be affecting the order here?
  return (packets.indexOf("[[2]]") + 1) * (packets.indexOf("[[6]]") + 1);
}
