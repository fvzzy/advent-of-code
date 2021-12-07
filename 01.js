export function problem1(input) {
/* 
  Day 1: Sonar Sweep
  https://adventofcode.com/2021/day/1
*/

  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) count++;
  }

  return count;
}

export function problem2(input) {
  let count = 0;
  let prevSum = input[0] + input[1] + input[2];

  for (let i = 3; i < input.length; i++) {
    let sum = prevSum + input[i] - input[i - 3];
    if (prevSum < sum) count++;
    prevSum = sum;
  }

  return count;
}
