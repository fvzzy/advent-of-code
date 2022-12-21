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
    let fn: () => number;

    if (Number.isInteger(Number(yell))) {
      fn = () => Number(yell);
    } else {
      let [exp1, operator, exp2] = yell.trim().split(" ");
      operator = monkey === "root" ? "-" : operator; // check for operation === 0 for solution
      fn = () => eval(`monkeys['${exp1}']() ${operator} monkeys['${exp2}']()`);
    }

    monkeys[monkey] = fn;
  }

  // converge towards the correct answer, binary search to cut down search space
  let left = 0;
  let right = 1e13;
  let guess: number;

  while (monkeys["root"]() !== 0) {
    guess = Math.floor((left + right) / 2);
    monkeys["humn"] = () => guess;

    // FIXME: there's a bug in here that returns the correct result for the
    // real inputs, but not the test data. Flipping the left and right pointers
    // below returns the opposite result (i.e. working test, broken real answer)
    // ¯\_(ツ)_/¯
    if (monkeys["root"]() < 0) {
      right = guess;
    } else {
      left = guess;
    }
  }

  return guess;
}
