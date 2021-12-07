import { getInput } from "./lib/utils.js";
import { problem1, problem2 } from "./01.js";

const rawInput = await getInput(1);
const input = rawInput.split("\n").map(Number);

const answer1 = problem1(input);
console.log(answer1);

const answer2 = problem2(input);
console.log(answer2);
