export const day = 6;
export const title = "lanternfish";

// iterative solution using strings for storage, for posterity
// far too inefficient to run on the larger problem set
// const populationIterative = (input, days) => {
//   let stack = input[0].replace(/,/g, "");
//   while (days > 0) {
//     let nextFish = "";
//     while (stack.length) {
//       let fish = stack[0];
//       stack = stack.slice(1);
//       const nextFish = (nextFish += fish === "0" ? "68" : parseInt(fish) - 1);
//     }
//     stack = nextFish;
//     days--;
//   }
//   return stack.length;
// };

// dynamic programming solution
const population = (input, days) => {
  const initialFish = input[0].split(",").map(Number);
  let populationsByTimer = Array(9).fill(0);

  for (let fish of initialFish) populationsByTimer[fish]++;

  while (days--) {
    // all fish with timer 0 will produce new fish
    let newFish = populationsByTimer[0];
    // shifting the array effectively "decreases" all fish by 1
    populationsByTimer.shift();
    // add a 6 for every previous 0
    populationsByTimer[6] += newFish;
    // push new fish to position 8
    populationsByTimer.push(newFish);
  }

  return populationsByTimer.reduce((fish, sum) => fish + sum, 0);
};

export function problem2021_6_1(input) {
  return population(input, 80);
}

export function problem2021_6_2(input) {
  return population(input, 256);
}
