export const day = 8;
export const title = "seven segment search";

export function problem8_1(input) {
  // JS array based solution
  // return input
  //   .map((line) => line.split(" | ")[1])
  //   .join(" ")
  //   .split(" ")
  //   .filter((digit) => [2, 3, 4, 7].includes(digit.length)).length;

  let count = 0;
  for (let line = 0; line < input.length; line++) {
    let cursor = input[line].length - 1;
    while (input[line][cursor] !== "|") {
      let digitLength = 0;
      while (input[line][cursor--] !== " ") digitLength++;
      if ([2, 3, 4, 7].includes(digitLength)) count++;
      digitLength = 0;
    }
  }
  return count;
}

export function problem8_2(input) {}
