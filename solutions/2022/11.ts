// https://adventofcode.com/2022/day/11
export const title2022_11 = "monkey in the middle";

export function problem2022_11_1(input: string[]) {
  const monkeys = [];
  let monkeyBusiness = 0;

  // organise inputs into something more usable
  let i = 0;
  while (i < input.length) {
    const monkey = Number(input[i++].slice(0, -1).split(" ")[1]);
    const items = input[i++].trim().replace("Starting items: ", "").split(",").map(Number);

    const opString = input[i++].trim().replace("Operation: new = ", "");
    const operation = new Function("old", `return ${opString}`);

    const divisor = Number(input[i++].replace("Test: divisible by ", ""));
    const ifTrue = Number(input[i++].replace("If true: throw to monkey ", ""));
    const ifFalse = Number(input[i++].replace("If false: throw to monkey ", ""));
    const test = new Function("worry", `return worry % ${divisor} === 0 ? ${ifTrue} : ${ifFalse}`);

    monkeys[monkey] = { items, operation, test };
    i++;
  }

  return monkeyBusiness;
}

export function problem2022_11_2(input: string[]) {}
