export const day = 6;
export const title = "lanternfish";

const inputToFish = (input) => input[0].split(",").map(Number);

const nextFish = (fish) => {
  let newFish = 0;
  for (let i = 0; i < fish.length; i++) {
    fish[i] === 0 ? (fish[i] = 6) && newFish++ : (fish[i] -= 1);
  }

  while (newFish > 0) fish.push(8) && newFish--;
  newFish = 0;

  return fish;
};

const populationAfterDays = (input, days) => {
  let fish = inputToFish(input);
  while (days > 0) (fish = nextFish(fish)) && days--;
  return fish.length;
};

export function problem6_1(input) {
  return populationAfterDays(input, 80);
}

export function problem6_2(input) {}
