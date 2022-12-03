import addSolutionFiles from "../lib/addSolutionFiles.js";

const [year, day, title] = process.argv.slice(2);

addSolutionFiles(year, day, title);
