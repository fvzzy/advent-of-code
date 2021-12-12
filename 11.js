export const day = 11;
export const title = "dumbo octopus";

const octopiMap = (input) => input.map((line) => line.split("").map(Number));

export const step = (octopi) => {
  const adjacentCoords = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];

  const charged = new Set();
  const flashed = new Set();

  // increment elements, saving 9s in a set to flash in next loop
  for (let y = 0; y < octopi.length; y++) {
    for (let x = 0; x < octopi[0].length; x++) {
      if (octopi[y][x] === 9) {
        charged.add(`${x}${y}`);
      } else {
        octopi[y][x]++;
      }
    }
  }

  // flash all the "charged" octopi (i.e. those with energy level 9)
  while (charged.size) {
    const chargedPos = charged.values().next().value;
    const [x, y] = chargedPos.split("").map(Number);

    // increment every octopus adjacent to a charged one
    for (let [adjX, adjY] of adjacentCoords) {
      if (
        y + adjY < 0 ||
        y + adjY >= octopi.length ||
        x + adjX < 0 ||
        x + adjX >= octopi[0].length
      )
        continue;

      const adjKey = `${x + adjX}${y + adjY}`;
      // ignore adjacent octopi that are also charged, or already flashed
      if (charged.has(adjKey) || flashed.has(adjKey)) continue;

      if (octopi[y + adjY][x + adjX] === 9) {
        // note any newly charged octopi
        charged.add(adjKey);
      } else {
        octopi[y + adjY][x + adjX]++;
      }
    }

    // update the state of the current octopus
    octopi[y][x] = 0;
    charged.delete(chargedPos);
    flashed.add(chargedPos);
  }

  return { octopi, flashes: flashed.size };
};

export function problem11_1(input) {
  const octopi = octopiMap(input);
  let steps = 100;
  let flashes = 0;
  while (steps--) flashes += step(octopi).flashes;
  return flashes;
}

export function problem11_2(input) {
  const octopi = octopiMap(input);
  let steps = 1;
  while (step(octopi).flashes !== 100) steps++;
  return steps;
}
