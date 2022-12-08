// https://adventofcode.com/2022/day/8
export const title2022_8 = "treetop tree house";

export function problem2022_8_1(input: string[]) {
  const perimeter = 2 * input[0].length + 2 * input.length - 4;
  let visible = perimeter;

  for (let y = 1; y < input.length - 1; y++) {
    for (let x = 1; x < input[0].length - 1; x++) {
      const current = input[y][x];

      let up = y;
      let down = y;
      let left = x;
      let right = x;

      let isVisible = false;

      while (input[--up][x] < current) {
        if (up <= 0) {
          visible += 1;
          isVisible = true;
          break;
        }
      }

      while (!isVisible && input[++down][x] < current) {
        if (down >= input.length - 1) {
          visible += 1;
          isVisible = true;
          break;
        }
      }

      while (!isVisible && input[y][--left] < current) {
        if (left <= 0) {
          visible += 1;
          isVisible = true;
          break;
        }
      }

      while (!isVisible && input[y][++right] < current) {
        if (right >= input.length - 1) {
          visible += 1;
          isVisible = true;
          break;
        }
      }
    }
  }
  return visible;
}

export function problem2022_8_2(input: string[]) {
  let optimumScenicScore = 0;

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      let current = input[y][x];

      let scoreUp = 0;
      let scoreDown = 0;
      let scoreLeft = 0;
      let scoreRight = 0;

      let up = y;
      let down = y;
      let left = x;
      let right = x;

      while (--up >= 0) {
        scoreUp += 1;
        if (input[up][x] >= current) break;
      }

      while (++down <= input.length - 1) {
        scoreDown += 1;
        if (input[down][x] >= current) break;
      }

      while (--left >= 0) {
        scoreLeft += 1;
        if (input[y][left] >= current) break;
      }

      while (++right <= input[0].length - 1) {
        scoreRight += 1;
        if (input[y][right] >= current) break;
      }

      const currentScenicScore = scoreUp * scoreDown * scoreLeft * scoreRight;
      optimumScenicScore = Math.max(optimumScenicScore, currentScenicScore);
    }
  }

  return optimumScenicScore;
}
