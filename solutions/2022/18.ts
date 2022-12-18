// https://adventofcode.com/2022/day/18
export const title2022_18 = "boiling boulders";

export function problem2022_18_1(input: string[]) {
  const cubesArr: number[][] = input.map((cube) => cube.split(",").map(Number));
  const cubes: Set<string> = new Set();
  let surfaceArea = 0;

  for (let [x, y, z] of cubesArr) {
    cubes.add(`${x}-${y}-${z}`);
  }

  for (let [x, y, z] of cubesArr) {
    if (!cubes.has(`${x + 1}-${y}-${z}`)) surfaceArea++;
    if (!cubes.has(`${x - 1}-${y}-${z}`)) surfaceArea++;
    if (!cubes.has(`${x}-${y + 1}-${z}`)) surfaceArea++;
    if (!cubes.has(`${x}-${y - 1}-${z}`)) surfaceArea++;
    if (!cubes.has(`${x}-${y}-${z + 1}`)) surfaceArea++;
    if (!cubes.has(`${x}-${y}-${z - 1}`)) surfaceArea++;
  }

  return surfaceArea;
}

export function problem2022_18_2(input: string[]) {}
