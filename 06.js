export const day = 6;
export const title = "lanternfish";

const inputToFish = (input) => input[0].split(",").map(Number);

const populationAfterDays = (input, days) => {
  let stack = inputToFish(input);
  while (days > 0) {
    let nextStack = [];
    while (stack.length) {
      let fish = stack.shift();
      const nextFish = fish === 0 ? [6, 8] : [--fish];
      nextStack.push(...nextFish);
    }
    stack = nextStack;
    days--;
  }
  return stack.length;
};

export function problem6_1(input) {
  return populationAfterDays(input, 80);
}

export function problem6_2(input) {}
