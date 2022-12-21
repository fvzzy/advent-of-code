// https://adventofcode.com/2022/day/21
export const title2022_21 = "monkey math";

export function problem2022_21_1(input: string[]) {
  const monkeys = {};

  for (let instruction of input) {
    const [monkey, yell] = instruction.split(":");
    let fn: () => number;

    if (Number.isInteger(Number(yell))) {
      fn = () => Number(yell);
    } else {
      const [exp1, operator, exp2] = yell.trim().split(" ");
      fn = () => eval(`monkeys['${exp1}']() ${operator} monkeys['${exp2}']()`);
    }

    monkeys[monkey] = fn;
  }

  return monkeys["root"]();
}

export function problem2022_21_2(input: string[]) {
  // TODO: figure out how to solve simultaneous equations in code ¯\_(ツ)_/¯
  const monkeys = {};

  for (let instruction of input) {
    const [monkey, yell] = instruction.split(":");
    let fn: () => number;

    if (Number.isInteger(Number(yell))) {
      fn = () => Number(yell);
    } else {
      const [exp1, operator, exp2] = yell.trim().split(" ");
      const correctOperator = monkey === "root" ? "===" : operator;
      fn = () => eval(`monkeys['${exp1}']() ${correctOperator} monkeys['${exp2}']()`);
    }

    monkeys[monkey] = fn;
  }

  let attempt = 0;
  while (!monkeys["root"]()) {
    monkeys["humn"] = () => attempt;
    attempt++;
  }

  return attempt;
}
