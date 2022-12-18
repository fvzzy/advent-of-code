// https://adventofcode.com/2022/day/14
export const title2022_14 = "regolith reservoir";

type Coordinate = number[];
type Path = Coordinate[];
type Scan = Path[];
type Map = Set<string>;

function drawMap(paths: Scan): Map {
  const map: Map = new Set();

  for (let path of paths) {
    for (let i = 0; i < path.length - 1; i++) {
      const [sX, sY] = path[i];
      const [eX, eY] = path[i + 1];

      if (sX === eX) {
        for (let y = Math.min(sY, eY); y <= Math.max(sY, eY); y++) map.add(`${sX},${y}`);
      } else if (sY === sY) {
        for (let x = Math.min(sX, eX); x <= Math.max(sX, eX); x++) map.add(`${x},${sY}`);
      }
    }
  }

  return map;
}

function pourSand(map: Map, maxY: number, endlessVoid: boolean = true): boolean {
  let x = 500;
  let y = 0;

  while (!map.has("500,0")) {
    if (endlessVoid && y + 1 > maxY) {
      return false;
    } else if (!endlessVoid && y === maxY + 1) {
      map.add(`${x},${y}`);
      return true;
    }

    if (!map.has(`${x},${y + 1}`)) {
      y++;
    } else if (!map.has(`${x - 1},${y + 1}`)) {
      x--;
      y++;
    } else if (!map.has(`${x + 1},${y + 1}`)) {
      x++;
      y++;
    } else {
      map.add(`${x},${y}`);
      return true;
    }
  }
}

export function problem2022_14_1(input: string[]) {
  const paths = input.map((path) => path.split(" -> ").map((xy) => xy.split(",").map(Number)));
  const map = drawMap(paths);
  const maxY = Math.max(...[...map].map((xy) => xy.split(",")[1]).map(Number));

  let totalSand = 0;
  while (pourSand(map, maxY)) totalSand += 1;
  return totalSand;
}

export function problem2022_14_2(input: string[]) {
  const paths = input.map((path) => path.split(" -> ").map((xy) => xy.split(",").map(Number)));
  const map = drawMap(paths);
  const maxY = Math.max(...[...map].map((xy) => xy.split(",")[1]).map(Number));

  let totalSand = 0;
  while (pourSand(map, maxY, false)) totalSand += 1;
  return totalSand;
}
