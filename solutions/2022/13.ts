// https://adventofcode.com/2022/day/13
export const title2022_13 = "distress signal";

// export function unwrapPacket(packet: string) {
//   let i = 0;
//   let j = packet.length - 1;
//   let unwrapped = packet;
//   while (unwrapped[i] === "[" && unwrapped[j] === "]") {
//     unwrapped = unwrapped.slice(1, -1);
//   }
//   return unwrapped;
// }

export function compareLists(left: number[], right: number[]) {
  let i = 0;
  // add a case to handle [[]] vs [] === false
  while (left[i]) {
    if (left.length !== right.length && i === right.length - 1) {
      return left[i] < right[i];
    }
    if (left[i] > right[i]) return false;
    i += 1;
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
    let valid = true;
    const unbalancedLeft = input[i];
    const unbalancedRight = input[i + 1];
    const { left, right } = balanceParens(unbalancedLeft, unbalancedRight);

    let leftList = [];
    let rightList = [];

    let j = 0;
    let k = 0;
    if (valid) validIndicesSum += pair;
  }

  return validIndicesSum;
}

export function problem2022_13_2(input: string[]) {}
