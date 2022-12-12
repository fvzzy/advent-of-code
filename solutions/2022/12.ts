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

function shortestPathBFS(map: number[][], start: [number, number], end: [number, number]) {
  let distance = 0;
  const visited = Array(map.length)
    .fill(null)
    .map(() => Array(map[0].length).fill(false));

  const queue = [start];
  let nodesLeftCurrentRound = 1;
  let nodesNextRound = 0;

  visited[start[1]][start[0]] = true;

  while (queue.length) {
    // or colQueue.length, both should be the same
    const [x, y] = queue.shift();

    // terminate if we've reached the end
    if (x === end[0] && y === end[1]) break;

    // visit each neighbour
    for (let [moveX, moveY] of [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]) {
      const adjX = x + moveX;
      const adjY = y + moveY;

      // skip counting this neighbour if it is out of bounds, higher elevation, or visited
      if (!map?.[adjY]?.[adjX] || map[adjY][adjX] - map[y][x] > 1 || visited[adjY][adjX]) continue;

      queue.push([adjX, adjY]);
      visited[adjY][adjX] = true;
      nodesNextRound += 1;
    }

    nodesLeftCurrentRound -= 1;
    if (nodesLeftCurrentRound === 0) {
      nodesLeftCurrentRound = nodesNextRound;
      nodesNextRound = 0;
      distance += 1;
    }
  }

  return distance;
}

export function problem2022_12_1(input: string[]) {
  const { map, start, end } = parseInput(input);
  return shortestPathBFS(map, start, end);
}

export function problem2022_12_2(input: string[]) {}
