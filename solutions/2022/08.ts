// https://adventofcode.com/2022/day/8
export const title2022_8 = "treetop tree house";

export function problem2022_8_1(input: string[]) {
  const perimeter = 2 * input[0].length + 2 * input.length - 4;
  let visible = perimeter;

  for (let y = 1; y < input.length - 1; y++) {
    for (let x = 1; x < input[0].length - 1; x++) {
      const current = input[y][x];
      let top = y;
      let bottom = y;
      let left = x;
      let right = x;

      let isVisible = false;

      while (input[--top][x] < current) {
        if (top <= 0) {
          visible += 1;
          isVisible = true;
          break;
        }
      }

      while (!isVisible && input[++bottom][x] < current) {
        if (bottom >= input.length - 1) {
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

export function problem2022_8_2(input: string[]) {}
