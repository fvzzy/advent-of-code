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

function buildGraph(map: number[][]) {
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let adjacencyList = {};
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      const node = `${x},${y}`;
      adjacencyList[node] = {};

      for (let [shiftX, shiftY] of directions) {
        const [adjX, adjY] = [shiftX + x, shiftY + y];
        const adjKey = `${adjX},${adjY}`;
        if (map[adjY]?.[adjX]) adjacencyList[node][adjKey] = map[adjY][adjX];
      }
    }
  }

  return { adjacencyList };
}

export function problem2022_12_1(input: string[]) {
  let steps = 0;
  const { map, start, end } = parseInput(input);
  const adjacencyList = buildGraph(map);

  console.log(adjacencyList);

  return steps;
}

export function problem2022_12_2(input: string[]) {}
