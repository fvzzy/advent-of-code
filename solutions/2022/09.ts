// https://adventofcode.com/2022/day/9
export const title2022_9 = "rope bridge";

// well fuck it I guess we're printing the whole thing to debug this
function createGrid(width: number, height: number): [][] {
  const grid = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(" . ");
    }
    grid.push(row);
  }
  return grid;
}

function printGrid(grid: [][]): void {
  for (let row = grid.length - 1; row >= 0; row--) {
    console.log(grid[row].join(""));
  }
}

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
  const exampleInput2 = ["R 5", "U 8", "L 8"];
  let startX = 11;
  let startY = 5;

  const knots = [...Array(10)].map(() => [0, 0]);
  const tailPositions = new Set();

  for (let headMove of exampleInput2) {
    const grid = createGrid(26, 21);

    const [headMoveDir, headMoveSteps] = headMove.split(" ");

    for (let step = Number(headMoveSteps); step > 0; step--) {
      // move head
      grid[knots[0][1] + startY][knots[0][0] + startX] = ` . `;

      knots[0][0] += MOVES[headMoveDir][0];
      knots[0][1] += MOVES[headMoveDir][1];

      let lastHeadMove = MOVES[headMoveDir];

      grid[knots[0][1] + startY][knots[0][0] + startX] = ` H `;

      // move body
      for (let i = 1; i < knots.length; i++) {
        const currHead = knots[i - 1];
        const curr = knots[i];
        const [prevX, prevY] = knots[i];

        grid[knots[i][1] + startY][knots[i][0] + startX] = ` . `;

        console.log(`moving ${i} based on last head move ${lastHeadMove} for ${i - 1}`);

        if (Math.abs(currHead[0] - curr[0]) >= 2 || Math.abs(currHead[1] - curr[1]) >= 2) {
          if (lastHeadMove[0] && lastHeadMove[1]) {
            // diagonal move
            knots[i][0] += lastHeadMove[0];
            knots[i][1] += lastHeadMove[1];
          } else if (lastHeadMove[0]) {
            // horizontal move
            knots[i][0] += lastHeadMove[0];

            if (currHead[1] !== curr[1]) {
              knots[i][1] = currHead[1];
            }
          } else if (lastHeadMove[1]) {
            // vertical move
            knots[i][1] += lastHeadMove[1];

            if (currHead[0] !== curr[0]) {
              knots[i][0] = currHead[0];
            }
          }
          lastHeadMove = [knots[i][0] - prevX, knots[i][1] - prevY];
        }

        grid[startY][startX] = "s";
        grid[knots[i][1] + startY][knots[i][0] + startX] = ` ${i} `;
        console.log(`direction: ${headMoveDir}, step: ${Number(headMoveSteps) - step}`);
        printGrid(grid);

        if (i === 9) tailPositions.add(`${knots[i][0]}-${knots[i][1]}`);
      }
    }
  }

  return tailPositions.size;
}
