/* 
  Day 1: Sonar Sweep
  https://adventofcode.com/2021/day/1
*/

export function problem1_1(input) {
  const nums = input.map(Number);

  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) count++;
  }

  return count;
}

export function problem1_2(input) {
  const nums = input.map(Number);

  let count = 0;
  let prevSum = nums[0] + nums[1] + nums[2];

  for (let i = 3; i < nums.length; i++) {
    let sum = prevSum + nums[i] - nums[i - 3];
    if (prevSum < sum) count++;
    prevSum = sum;
  }

  return count;
}
