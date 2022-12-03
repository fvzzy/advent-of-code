import { updateSolutionsIndex } from "../lib/addSolutionFiles.js";

const [year, day] = process.argv.slice(2);

updateSolutionsIndex(year, day);
