import { getInput } from "./lib/utils.js";

function problem1(input) {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) count++;
  }

  return count;
}

function problem2(input) {
  let count = 0;
  let prevSum = input[0] + input[1] + input[2];

  for (let i = 3; i < input.length; i++) {
    let sum = prevSum + input[i] - input[i - 3];
    if (prevSum < sum) count++;
    prevSum = sum;
  }

  return count;
}

const rawInput = await getInput(1);
const input = rawInput.split("\n").map(Number);

const answer1 = problem1(input);
console.log(answer1);

const answer2 = problem2(input);
console.log(answer2);
