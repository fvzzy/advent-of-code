import { getInput } from "../lib/utils.js";
import solutions from "../lib/solutions.js";

const day = process.argv.slice(2)[0];

const rawInput = await getInput(day);
const input = rawInput.split("\n");
input.pop();

const { problem1, problem2, title } = solutions[day];
console.log(`--- day ${day}: ${title} ---`);

const answer1 = problem1(input);
console.log("part 1:", answer1);

const answer2 = problem2(input);
console.log("part 2:", answer2);
