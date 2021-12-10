export const day = 8;
export const title = "seven segment search";

export function problem8_1(input) {
  return input
    .map((line) => line.split(" | ")[1])
    .join(" ")
    .split(" ")
    .filter((digit) => [2, 3, 4, 7].includes(digit.length)).length;
}

export function problem8_2(input) {}
