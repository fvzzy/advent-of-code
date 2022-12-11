// https://adventofcode.com/2022/day/11
export const title2022_11 = "monkey in the middle";

function wrangleMonkeys(input: string[]) {
  const monkeys = []; // TODO: type this

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

    monkeys[monkey] = { items, operation, test, inspections: 0, divisor };
    i++;
  }

  return monkeys;
}

export function problem2022_11_1(input: string[]) {
  const monkeys = wrangleMonkeys(input);

  for (let round = 20; round > 0; round--) {
    for (let i = 0; i < monkeys.length; i++) {
      const { items, operation, test } = monkeys[i];
      monkeys[i].inspections += items.length;

      while (items.length) {
        const item = items.shift();
        const worry = Math.floor(operation(item) / 3);
        const receipient = test(worry);
        monkeys[receipient].items.push(worry);
      }
    }
  }

  const sortedInspections = monkeys.map((monkey) => monkey.inspections).sort((a, b) => b - a);

  return sortedInspections[0] * sortedInspections[1];
}

export function problem2022_11_2(input: string[]) {
  const monkeys = wrangleMonkeys(input);
  const productOfDivisors = monkeys.map((monkey) => monkey.divisor).reduce((acc, curr) => acc * curr, 1);

  for (let round = 10000; round > 0; round--) {
    for (let i = 0; i < monkeys.length; i++) {
      const { items, operation, test } = monkeys[i];
      monkeys[i].inspections += items.length;

      while (items.length) {
        const item = items.shift();
        const worry = operation(item) % productOfDivisors;
        const receipient = test(worry);
        monkeys[receipient].items.push(worry);
      }
    }
  }

  const sortedInspections = monkeys.map((monkey) => monkey.inspections).sort((a, b) => b - a);

  return sortedInspections[0] * sortedInspections[1];
}