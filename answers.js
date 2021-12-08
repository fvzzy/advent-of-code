import { getInput } from "./lib/utils.js";
import { problem1_1, problem1_2, title as title1 } from "./01.js";
import { problem2_1, problem2_2, title as title2 } from "./02.js";
import { problem3_1, problem3_2, title as title3 } from "./03.js";
import { problem4_1, problem4_2, title as title4 } from "./04.js";

const solution = {
  1: { problem1: problem1_1, problem2: problem1_2, title: title1 },
  2: { problem1: problem2_1, problem2: problem2_2, title: title2 },
  3: { problem1: problem3_1, problem2: problem3_2, title: title3 },
  4: { problem1: problem4_1, problem2: problem4_2, title: title4 },
};

const day = process.argv.slice(2)[0];

const rawInput = await getInput(day);
const input = rawInput.split("\n");
input.pop();

const { problem1, problem2, title } = solution[day];
console.log(`--- day ${day}: ${title} ---`);

const answer1 = problem1(input);
console.log("part 1:", answer1);

const answer2 = problem2(input);
console.log("part 2:", answer2);
