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

export function problem2022_9_2(input: string[]) {
  const segments = [...Array(10)].map(() => [0, 0]);
  const tailPositions = new Set();

  for (let move of input) {
    const [dir, steps] = move.split(" ");

    for (let step = Number(steps); step > 0; step--) {
      // first move head
      segments[0] = segments[0].map((xy, idx) => xy + MOVES[dir][idx]);

      // then body
      for (let i = 1; i < segments.length; i++) {
        const next = segments[i - 1];
        const curr = segments[i];

        if (Math.abs(next[0] - curr[0]) >= 2 || Math.abs(next[1] - curr[1]) >= 2) {
          segments[i] = curr.map((_, idx) => next[idx] - MOVES[dir][idx]);
        }

        if (i === 9) tailPositions.add(`${segments[i][0]}-${segments[i][1]}`);
      }
    }
  }

  return tailPositions.size;
}
