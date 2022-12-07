// https://adventofcode.com/2022/day/7
export const title2022_7 = "no space left on device";

export function problem2022_7_1(input: string[]) {
  const files = { "/": {} };
  const filesizes = {};
  let currentPath = [];
  let currentDir = undefined;
  let i = 0;

  while (i < input.length) {
    let line = input[i];
    const [_, command, arg] = line.split(" ");
    let printingOutput = false;
    if (command === "cd") {
      if (arg === "/") {
        currentPath = ["/"]; // reset back to root
        currentDir = files["/"];
      } else if (arg === "..") {
        currentPath.pop();
        currentDir = files; // one level above root
        for (let dir of currentPath) {
          currentDir = currentDir[dir];
        }
      } else {
        currentPath.push(arg);
        if (!currentDir[arg]) currentDir[arg] = {};
        currentDir = currentDir[arg];
      }
    } else if (command === "ls") {
      printingOutput = true;
      while (++i < input.length && input[i][0] !== "$") {
        const output = input[i];
        if (output[0] === "d") {
          // directory
          const [_, dir] = output.split(" ");
          if (!currentDir[dir]) currentDir[dir] = {};
        } else {
          // file
          const [size, name] = output.split(" ");
          currentDir[name] = size;
          for (let dir of currentPath) {
            if (!filesizes[dir]) filesizes[dir] = 0;
            filesizes[dir] += Number(size);
          }
        }
      }
    }
    !printingOutput && i++;
  }

  return Object.values(filesizes)
    .map(Number)
    .reduce((total, curr) => (curr <= 100000 ? total + curr : total), 0);
}

export function problem2022_7_2(input: string[]) {}
