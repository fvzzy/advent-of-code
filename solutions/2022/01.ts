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
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let currentTotal = 0;

  for (let val of input) {
    if (val !== "") {
      currentTotal += parseInt(val);
    } else {
      if (currentTotal > max1) {
        max3 = max2;
        max2 = max1;
        max1 = currentTotal;
      } else if (currentTotal > max2) {
        max3 = max2;
        max2 = currentTotal;
      } else if (currentTotal > max3) {
        max3 = currentTotal;
      }
      currentTotal = 0;
    }
  }

  return max1 + max2 + max3;
}
