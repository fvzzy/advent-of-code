// https://adventofcode.com/2022/day/7
export const title2022_7 = "no space left on device";

function generateFilesizesByPath(input: string[]) {
  const files = { "/": {} }; // TODO: figure out how to type recursive structures
  const filesizes: Record<string, number> = {};
  let currentPath: string[] = [];
  let currentDir;

  let cursor: number = 0;

  while (cursor < input.length) {
    let line = input[cursor];
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
          // TODO: rewrite this using a "parent" cursor for each directory
          currentDir = currentDir[dir];
        }
      } else {
        currentPath.push(arg);
        if (!currentDir[arg]) currentDir[arg] = {};
        currentDir = currentDir[arg];
      }
    } else if (command === "ls") {
      printingOutput = true;
      while (++cursor < input.length && input[cursor][0] !== "$") {
        const output = input[cursor];
        if (output[0] === "d") {
          // directory
          const dir = output.split(" ")[1];
          if (!currentDir[dir]) currentDir[dir] = {};
        } else {
          // file
          const [size, name] = output.split(" ");
          currentDir[name] = size;
          for (let x = 1; x < currentPath.length + 1; x++) {
            const nestedDir = currentPath.slice(0, x).join("-");
            if (!filesizes[nestedDir]) filesizes[nestedDir] = 0;
            filesizes[nestedDir] += Number(size);
          }
        }
      }
    }
    !printingOutput && cursor++;
  }

  return filesizes;
}

export function problem2022_7_1(input: string[]) {
  const filesizes = generateFilesizesByPath(input);
  return Object.values(filesizes)
    .map(Number)
    .reduce((total, curr) => (curr <= 100000 ? total + curr : total), 0);
}

export function problem2022_7_2(input: string[]) {
  const filesizes = generateFilesizesByPath(input);
  const unused = 70000000 - filesizes["/"];
  const minimumPurge = 30000000 - unused;
  return Math.min(...Object.values(filesizes).filter((size) => size >= minimumPurge));
}
