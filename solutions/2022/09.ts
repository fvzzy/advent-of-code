// https://adventofcode.com/2022/day/9
export const title2022_9 = "rope bridge";

export function problem2022_9_1(input: string[]) {
  let h = [0, 0];
  //   let t = [0, 0]; // don't think this is required yet?
  const tPositions = new Set();
  const moves = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  for (let hMove of input) {
    const [dir, distance] = hMove.split(" ");
    for (let step = Number(distance); step > 0; step--) {
      h = [h[0] + moves[dir][0], h[1] + moves[dir][1]];
      if (step !== 1) tPositions.add(`${h[0]}-${h[1]}`);
    }
  }

  return tPositions.size;
}

export function problem2022_9_2(input: string[]) {}
