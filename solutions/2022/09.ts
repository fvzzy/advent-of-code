// https://adventofcode.com/2022/day/9
export const title2022_9 = "rope bridge";

export function problem2022_9_1(input: string[]) {
  const MOVES = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let h = [0, 0];
  let tX = h[0];
  let tY = h[1];
  const tPositions = new Set();

  for (let line = 0; line < input.length; line++) {
    const move = input[line];
    const [dir, steps] = move.split(" ");

    for (let step = Number(steps); step > 0; step--) {
      const hX = h[0] + MOVES[dir][0];
      const hY = h[1] + MOVES[dir][1];

      h = [hX, hY];
      if (Math.abs(hX - tX) >= 2 || Math.abs(hY - tY) >= 2) {
        tX = hX - MOVES[dir][0];
        tY = hY - MOVES[dir][1];
      }

      tPositions.add(`${tX}-${tY}`);
    }
  }

  return tPositions.size;
}

export function problem2022_9_2(input: string[]) {}
