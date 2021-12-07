import { existsSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";

export async function getInput(day) {
  const inputPath = `./inputs/${day.toString().padStart(2, "0")}.txt`;

  if (existsSync(inputPath)) {
    return readFileSync(inputPath).toString("utf-8");
  }

  if (!process.env.SESSION_TOKEN) {
    console.error("Set a session token in .env to fetch your puzzle inputs.");
    process.exit(1);
  }

  const opts = { headers: { cookie: `session=${process.env.SESSION_TOKEN}` } };
  const url = `https://adventofcode.com/2021/day/${day}/input`;
  const res = await fetch(url, opts);
  const input = await res.text();

  writeFileSync(inputPath, input);
  return input;
}
