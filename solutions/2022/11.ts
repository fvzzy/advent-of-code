// https://adventofcode.com/2022/day/11
export const title2022_11 = "monkey in the middle";

type WorryLevel = number;

type Monkey = {
  items: WorryLevel[];
  operation: (old: WorryLevel) => WorryLevel;
  divisor: number;
  test: (worry: WorryLevel) => number;
  inspections: number;
};

function wrangleMonkeys(input: string[]) {
  const monkeys: Monkey[] = [];
  const numberFromLine = (line: string) => Number(line.match(/\d+/));

  for (let i = 0; i < input.length; i += 7) {
    const items = input[i + 1].match(/\d+/g).map(Number);

    const operationStr = input[i + 2].split(" = ")[1];
    const operation = (old: WorryLevel) => eval(operationStr);

    const divisor = numberFromLine(input[i + 3]);
    const receipientTrue = numberFromLine(input[i + 4]);
    const receipientFalse = numberFromLine(input[i + 5]);
    const test = (worry: WorryLevel) => (worry % divisor === 0 ? receipientTrue : receipientFalse);

    monkeys.push({ items, operation, divisor, test, inspections: 0 });
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

  const sortedInspections = monkeys.map(({ inspections }) => inspections).sort((a, b) => b - a);
  return sortedInspections[0] * sortedInspections[1];
}

export function problem2022_11_2(input: string[]) {
  const monkeys = wrangleMonkeys(input);
  const productOfDivisors = monkeys.map(({ divisor }) => divisor).reduce((acc, curr) => acc * curr, 1);

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

  const sortedInspections = monkeys.map(({ inspections }) => inspections).sort((a, b) => b - a);
  return sortedInspections[0] * sortedInspections[1];
}
