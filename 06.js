export const day = 6;
export const title = "lanternfish";

const populationAfterDays = (input, days) => {
  let stack = input[0].replace(/,/g, "");
  while (days > 0) {
    let nextFish = "";
    while (stack.length) {
      let fish = stack[0];
      stack = stack.slice(1);
      const nextFish = (nextFish += fish === "0" ? "68" : parseInt(fish) - 1);
    }
    stack = nextFish;
    days--;
  }
  return stack.length;
};

export function problem6_1(input) {
  return populationAfterDays(input, 80);
}

export function problem6_2(input) {}
