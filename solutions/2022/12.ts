// https://adventofcode.com/2022/day/12
export const title2022_12 = "hill climbing algorithm";

function parseInput(input: string[]) {
  const map: number[][] = [];
  let start: [number, number];
  let end: [number, number];

  for (let y = 0; y < input.length; y++) {
    map.push([]);
    for (let x = 0; x < input[0].length; x++) {
      if (input[y][x] === "S") {
        start = [x, y];
        map[y].push("a".charCodeAt(0));
      } else if (input[y][x] === "E") {
        end = [x, y];
        map[y].push("z".charCodeAt(0));
      } else {
        map[y].push(input[y][x].charCodeAt(0));
      }
    }
  }

  return { map, start, end };
}

export function problem2022_12_1(input: string[]) {
  let steps = 0;
  const dirX = [-1, 1, 0, 0];
  const dirY = [0, 0, 1, -1];

  const {
    map,
    start: [sx, sy],
    end: [ex, ey],
  } = parseInput(input);
  const rows = map.length;
  const cols = map[0].length;

  const rowQueue = [sy];
  const colQueue = [sx];
  let nodesLeftCurrentRound = 1;
  let nodesNextRound = 0;
  let finished = false;
  const visited = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));

  visited[sy][sx] = 1;

  while (rowQueue.length) {
    // or colQueue.length, both should be the same
    const y = rowQueue.shift();
    const x = colQueue.shift();
    if (y === ey && x === ex) {
      finished = true;
      break; // wrap this up into while loop condition?
    }
    // visit each neighbour
    for (let i = 0; i < 4; i++) {
      const adjX = x + dirX[i];
      const adjY = y + dirY[i];
      // skip if the calculated cell is out of bounds, higher elevation, or visited
      if (!map?.[adjY]?.[adjX] || map[adjY][adjX] - map[y][x] > 1 || visited[adjY][adjX]) continue;

      rowQueue.push(adjY);
      colQueue.push(adjX);
      visited[adjY][adjX] = true;
      nodesNextRound += 1;
    }

    nodesLeftCurrentRound -= 1;
    if (nodesLeftCurrentRound === 0) {
      nodesLeftCurrentRound = nodesNextRound;
      nodesNextRound = 0;
      steps += 1;
    }
  }

  return finished ? steps : -1;
}

export function problem2022_12_2(input: string[]) {}
