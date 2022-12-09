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
  const knots = [...Array(10)].map(() => [0, 0]);
  const tailPositions = new Set();

  for (let headMove of input) {
    const [headMoveDir, headMoveSteps] = headMove.split(" ");

    for (let step = Number(headMoveSteps); step > 0; step--) {
      knots[0][0] += MOVES[headMoveDir][0];
      knots[0][1] += MOVES[headMoveDir][1];

      for (let i = 1; i < knots.length; i++) {
        const currHead = knots[i - 1];
        const curr = knots[i];

        if (Math.abs(currHead[0] - curr[0]) >= 2 || Math.abs(currHead[1] - curr[1]) >= 2) {
          if (curr[0] !== currHead[0]) {
            knots[i][0] = currHead[0] > curr[0] ? curr[0] + 1 : curr[0] - 1;
          }
          if (curr[1] !== currHead[1]) {
            knots[i][1] = currHead[1] > curr[1] ? curr[1] + 1 : curr[1] - 1;
          }
        }

        if (i === 9) tailPositions.add(`${knots[i][0]}-${knots[i][1]}`);
      }
    }
  }

  return tailPositions.size;
}
