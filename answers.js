import { getInput } from "./lib/utils.js";
import { problem1_1, problem1_2 } from "./01.js";
import { problem2_1, problem2_2 } from "./02.js";
import { problem3_1 } from "./03.js";

const solution = {
  1: { problem1: problem1_1, problem2: problem1_2 },
  2: { problem1: problem2_1, problem2: problem2_2 },
  3: { problem1: problem3_1 },
};

const day = process.argv.slice(2)[0];

const rawInput = await getInput(day);
const input = rawInput.split("\n");

console.log(`answers for day ${day}`);
const answer1 = solution[day].problem1(input);
console.log("part 1: ", answer1);
const answer2 = solution[day].problem2(input);
console.log("part 2: ", answer2);
