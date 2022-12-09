// https://adventofcode.com/2022/day/9
export const title2022_9 = "rope bridge";

const MOVES = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

export function problem2022_9_1(input: string[]) {
  let h = [0, 0];
  let t = [0, 0];
  const tailPositions = new Set();

  for (let move of input) {
    const [dir, steps] = move.split(" ");

    for (let step = Number(steps); step > 0; step--) {
      h = h.map((xy, idx) => xy + MOVES[dir][idx]);

      if (Math.abs(h[0] - t[0]) >= 2 || Math.abs(h[1] - t[1]) >= 2) {
        t = t.map((_, idx) => h[idx] - MOVES[dir][idx]);
      }

      tailPositions.add(`${t[0]}-${t[1]}`);
    }
  }

  return tailPositions.size;
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
