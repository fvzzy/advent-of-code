import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import dayPadded from "./dayPadded.js";

export default async function getInput(year, day) {
  const inputDir = "./inputs";
  const inputFile = `${inputDir}/${year}-${dayPadded(day)}.txt`;

  if (existsSync(inputFile)) {
    return readFileSync(inputFile).toString("utf-8");
  }

  if (!existsSync(inputDir)) mkdirSync(inputDir);

  if (!process.env.SESSION_TOKEN) {
    console.error("Set a session token in .env to fetch your puzzle inputs.");
    process.exit(1);
  }

  const opts = { headers: { cookie: `session=${process.env.SESSION_TOKEN}` } };
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const res = await fetch(url, opts);
  const input = await res.text();

  writeFileSync(inputFile, input);
  return input;
}
