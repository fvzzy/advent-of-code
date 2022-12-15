// https://adventofcode.com/2022/day/14
export const title2022_14 = "regolith reservoir";

type Coordinate = number[];
type Path = Coordinate[];
type Scan = Path[];

function getMapBounds(paths: Scan) {
  const xValues = paths.flat().map((xy) => xy[0]);
  const yValues = paths.flat().map((xy) => xy[1]);
  return {
    minX: Math.min(...xValues, Infinity),
    minY: Math.min(...yValues, 0),
    maxX: Math.max(...xValues, 0),
    maxY: Math.max(...yValues, 0),
  };
}

function drawMap(paths: Scan, { minX, minY, maxX, maxY }) {
  const cols = maxX - minX + 1;
  const rows = maxY - minY + 1;
  const map = [...Array(rows)].map(() => [...Array(cols)].map(() => " "));

  for (let path of paths) {
    for (let i = 0; i < path.length - 1; i++) {
      const [sX, sY] = path[i];
      const [eX, eY] = path[i + 1];

      if (sX === eX) {
        for (let y = Math.min(sY, eY); y <= Math.max(sY, eY); y++) {
          map[y - minY][sX - minX] = "#";
        }
      } else if (sY === eY) {
        for (let x = Math.min(sX, eX); x <= Math.max(sX, eX); x++) {
          map[sY - minY][x - minX] = "#";
        }
      }
    }
  }

  return map;
}

function pourSand(map: string[][], { minX, minY, maxY }) {
  let sandX = 500 - minX;
  let sandY = 0 - minY;

  const moves = {
    d: { x: 0, y: 1 },
    l: { x: -1, y: 1 },
    r: { x: 1, y: 1 },
  };
  const blockers = ["#", "o"];

  const unblockedDown = (x, y) => !blockers.includes(map[y + moves.d.y]?.[x]);
  const unblockedLeft = (x, y) => !blockers.includes(map[y + moves.l.y]?.[x + moves.l.x]);
  const unblockedRight = (x, y) => !blockers.includes(map[y + moves.r.y]?.[x + moves.r.x]);
  const canMove = (x, y) => unblockedDown(x, y) || unblockedLeft(x, y) || unblockedRight(x, y);
  const inTheAbyss = (y) => sandY > maxY;

  if (!canMove(sandX, sandY)) return false;

  while (canMove(sandX, sandY) && !inTheAbyss(sandY)) {
    if (unblockedDown(sandX, sandY)) {
      sandX += moves.d.x;
      sandY += moves.d.y;
    } else if (unblockedLeft(sandX, sandY)) {
      sandX += moves.l.x;
      sandY += moves.l.y;
    } else {
      sandX += moves.r.x;
      sandY += moves.r.y;
    }
  }

  if (inTheAbyss(sandY)) return false;

  map[sandY][sandX] = "o";
  return true;
}

export function problem2022_14_1(input: string[]) {
  const paths = input.map((path) => path.split(" -> ").map((xy) => xy.split(",").map(Number)));
  const bounds = getMapBounds(paths);
  let map = drawMap(paths, bounds);

  let totalSand = 0;
  while (pourSand(map, bounds)) totalSand += 1;
  return totalSand;
}

export function problem2022_14_2(input: string[]) {}
