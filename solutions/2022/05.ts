/* 2022 day 5: "supply stacks" */

export function problem2022_5_1(input: string[]) {
  const stacks: Record<number, string[]> = {};

  for (let line of input) {
    if (line.includes("[")) {
      for (let i = 0; i < line.length; i++) {
        if (line[i] !== " " && line[i] !== "[" && line[i] !== "]") {
          const stack = Math.ceil(i / 4);
          stacks[stack] ? stacks[stack].unshift(line[i]) : (stacks[stack] = [line[i]]);
        }
      }
    } else if (line.includes("move")) {
      const [count, from, to] = line.match(/\d+/g);
      for (let i = 0; i < Number(count); i++) {
        stacks[to].push(stacks[from].pop());
      }
    }
  }

  const message = [];
  for (let stack of Object.values(stacks)) {
    message.push(stack[stack.length - 1]);
  }
  return message.join("");
}

export function problem2022_5_2(input: string[]) {}
