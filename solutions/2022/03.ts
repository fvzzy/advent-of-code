// https://adventofcode.com/2022/day/3
export const title2022_3 = "rucksack reorganization";

const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const itemPriority = {};
for (let x = 0; x < itemTypes.length; x++) {
  itemPriority[itemTypes[x]] = x + 1;
}

export function problem2022_3_1(input: string[]) {
  let prioritySum = 0;

  for (let rucksack of input) {
    const itemCount = rucksack.length / 2;
    const [comp1, comp2] = [rucksack.slice(0, itemCount), rucksack.slice(itemCount)];
    let match: string;

    for (let char1 of comp1) {
      for (let char2 of comp2) {
        if (char1 === char2) {
          match = char1;
          break;
        }
      }
    }

    prioritySum += itemPriority[match];
  }

  return prioritySum;
}

export function problem2022_3_2(input: string[]) {
  let prioritySum = 0;
  let elf = 0;

  while (elf < input.length - 2) {
    const chars1 = {};
    const chars2 = {};

    for (let char of input[elf]) chars1[char] = true;
    for (let char of input[elf + 1]) chars2[char] = true;

    for (let char of input[elf + 2]) {
      if (chars1[char] && chars2[char]) {
        prioritySum += itemPriority[char];
        break;
      }
    }

    elf += 3;
  }

  return prioritySum;
}
