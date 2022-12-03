/* 2022 day 1: "calorie counting" */

export function problem2022_1_1(input: string[]) {
  let max = 0;
  let currentTotal = 0;

  for (let val of input) {
    if (val !== "") {
      currentTotal += parseInt(val);
    } else {
      if (currentTotal > max) max = currentTotal;
      currentTotal = 0;
    }
  }

  return max;
}

export function problem2022_1_2(input: string[]) {
  const totals = [];
  let currentTotal = 0;

  for (let val of input) {
    if (val !== "") {
      currentTotal += parseInt(val);
    } else {
      totals.push(currentTotal);
      currentTotal = 0;
    }
  }

  totals.sort((a, b) => b - a);
  return totals[0] + totals[1] + totals[2];
}
