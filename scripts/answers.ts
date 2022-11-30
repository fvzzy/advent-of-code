import { getInput } from "../lib/utils.js";
import solutions from "../solutions/solutions.js";

const [year, day] = process.argv.slice(2);

const rawInput = await getInput(year, day);
const input = rawInput.split("\n");
input.pop();

const { problem1, problem2, title } = solutions[year][day];
console.log(`--- ${year} day ${day}: ${title} ---`);

const timePart1 = "⚡1";
const timePart2 = "⚡2";

console.time(timePart1);
const answer1 = problem1([...input]);
console.log("part 1:", answer1);
console.timeEnd(timePart1);

console.time(timePart2);
const answer2 = problem2([...input]);
console.log("part 2:", answer2);
console.timeEnd(timePart2);
