/* 2021 day 22 */
export const title = "reactor reboot";

const stepToRange = (step) => {
  const [x1, x2, y1, y2, z1, z2] = step.match(/\-?\d+/g).map(Number);
  return { x: [x1, x2], y: [y1, y2], z: [z1, z2] };
};

const rangeToCubes = (range) => {
  let cubes = [];
  for (let x = range.x[0]; x <= range.x[1]; x++) {
    for (let y = range.y[0]; y <= range.y[1]; y++) {
      for (let z = range.z[0]; z <= range.z[1]; z++) {
        cubes.push([x, y, z].join(","));
      }
    }
  }
  return cubes;
};

const union = (a, b) => [...new Set([...a, ...b])];
const subtract = (a, b) => a.filter((el) => !b.includes(el));

export function problem2021_22_1(input: string[]) {
  let cubes = [];

  // first 20 lines are in the range x=-50..50,y=-50..50,z=-50..50
  for (let line = 0; line < 20; line++) {
    if (!input[line]) break;

    const newCubes = rangeToCubes(stepToRange(input[line]));

    if (input[line].startsWith("on")) {
      cubes = union(cubes, newCubes);
    } else {
      cubes = subtract(cubes, newCubes);
    }
  }

  return cubes.length;
}

export function problem2021_22_2(input: string[]) {}
