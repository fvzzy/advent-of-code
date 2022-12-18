// https://adventofcode.com/2022/day/18
export const title2022_18 = "boiling boulders";

export function problem2022_18_1(input: string[]) {
  const cubes = input.map((cube) => cube.split(",").map(Number));
  const planeXY = new Set();
  const planeYZ = new Set();
  const planeXZ = new Set();
  let surfaceArea = 0;

  for (let [x, y, z] of cubes) {
    planeXY.add(`${x}-${y}`);
    planeYZ.add(`${y}-${z}`);
    planeXZ.add(`${x}-${z}`);
  }

  return surfaceArea;
}

export function problem2022_18_2(input: string[]) {}
