export const day = 6;
export const title = "lanternfish";

const inputToSchool = (input) => input[0].split(",").map(Number);

const populationAfterDays = (school, days, currentDay = 0) => {
  if (currentDay == days) return school.length;

  let nextSchool = [];
  for (let fish of school) {
    fish === 0 ? nextSchool.push(6, 8) : nextSchool.push(fish - 1);
  }
  return populationAfterDays(nextSchool, days, currentDay + 1);
};

export function problem6_1(input) {
  return populationAfterDays(inputToSchool(input), 80);
}

export function problem6_2(input) {}
