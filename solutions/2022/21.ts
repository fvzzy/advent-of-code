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
  const monkeys = {};

  for (let instruction of input) {
    const [monkey, yell] = instruction.split(":");
    if (monkey === "root") {
      const [num1, _, num2] = yell.trim().split(" ");
      monkeys[monkey] = `${num1} = ${num2}`;
    } else if (monkey === "humn") {
      monkeys[monkey] = "X";
    } else {
      monkeys[monkey] = yell.trim();
    }
  }

  // generate equation to solve for X
  while (monkeys["root"].match(/[a-z]{4}/g)) {
    const matches = monkeys["root"].match(/[a-z]{4}/g);
    for (let monkey of matches) {
      monkeys["root"] = monkeys["root"].replace(monkey, `(${monkeys[monkey]})`);
    }
  }

  const twoNumberEquation = /\((\d+)\s([-|+|*|/])\s(\d+)\)/g;

  let equation = monkeys["root"];
  // unwrap single digits from parens
  equation = equation.replace(/\((\d+)\)/g, "$1");
  // replace any simple equations with their results
  while (equation.match(twoNumberEquation)) {
    equation = equation.replace(twoNumberEquation, (matched: string) => eval(matched));
  }

  // TODO: figure out how to solve for X in code
  // for now, maybe this will get me close enough to solve...
  console.log(equation);
}
