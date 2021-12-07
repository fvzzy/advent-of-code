/* 
  Day 2: Dive!
  https://adventofcode.com/2021/day/2
*/

export function problem2_1(input) {
  let x = 0;
  let y = 0;

  const coords = {
    forward: [1, 0],
    up: [0, -1],
    down: [0, 1],
  };

  for (let move of input) {
    if (!move.length) continue; // ignore empty lines in the file

    const [direction, distance] = move.split(" ");
    x += coords[direction][0] * distance;
    y += coords[direction][1] * distance;
  }

  return x * y;
}

