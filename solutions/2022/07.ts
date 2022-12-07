// https://adventofcode.com/2022/day/7
export const title2022_7 = "no space left on device";

function generateFilesizesByPath(input: string[]) {
  const filesizes: Record<string, number> = {};
  let currentPath: string[] = [];
  let cursor: number = 0;

  while (cursor < input.length) {
    const line = input[cursor];
    const [_, command, arg] = line.split(" ");
    if (command === "cd") {
      if (arg === "/") {
        currentPath = ["/"];
      } else if (arg === "..") {
        currentPath.pop();
      } else {
        currentPath.push(arg);
      }
      cursor++;
    } else if (command === "ls") {
      while (++cursor < input.length && input[cursor][0] !== "$") {
        const output = input[cursor];
        if (output[0] !== "d") {
          const size = output.split(" ")[0];
          for (let x = 1; x < currentPath.length + 1; x++) {
            const nestedDir = currentPath.slice(0, x).join("-");
            if (!filesizes[nestedDir]) filesizes[nestedDir] = 0;
            filesizes[nestedDir] += Number(size);
          }
        }
      }
    }
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
