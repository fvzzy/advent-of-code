// https://adventofcode.com/2022/day/14
export const title2022_14 = "regolith reservoir";

type Coordinate = number[];
type Path = Coordinate[];
type Scan = Path[];

function getMapBounds(paths: Scan) {
  let minX = Infinity;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;

  for (let path of paths) {
    for (let part of path) {
      minX = Math.min(minX, part[0]);
      maxX = Math.max(maxX, part[0]);
      minY = Math.min(minY, part[1]);
      maxY = Math.max(maxY, part[1]);
    }
  }
  return { minX, minY, maxX, maxY };
}

function drawMap(paths: Scan, { minX, minY, maxX, maxY }) {
  const cols = maxX + 1 - minX;
  const rows = maxY + 1 - minY;
  const map = [...Array(rows)].map(() => [...Array(cols)].map(() => "."));
  map[0 - minY][500 - minX] = "+"; // sand entry point

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

export function problem2022_14_1(input: string[]) {
  const paths = input.map((path) => path.split(" -> ").map((xy) => xy.split(",").map(Number)));
  const bounds = getMapBounds(paths);
  const map = drawMap(paths, bounds);
  console.table(map);
}

export function problem2022_14_2(input: string[]) {}
