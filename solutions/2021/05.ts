// https://adventofcode.com/2021/day/5
export const title2021_5 = "hydrothermal venture";

const inputToCoords = (inputLine) => {
  const [_, startX, startY, endX, endY] = inputLine.match(/^(\d+),(\d+) -> (\d+),(\d+)$/).map(Number);

  return { startX, startY, endX, endY };
};

const updateCoordsIntersectCounts = (countsMap, x, y) => {
  const key = `${x},${y}`;
  countsMap[key] ? countsMap[key]++ : (countsMap[key] = 1);
};

const countIntersectingLines = (input, skipDiagonals = true) => {
  let coordsIntersectCounts = {};

  for (let inputLine of input) {
    const { startX, startY, endX, endY } = inputToCoords(inputLine);
    if (skipDiagonals && startX !== endX && startY !== endY) continue;
    updateCoordsIntersectCounts(coordsIntersectCounts, startX, startY);

    let x = startX;
    let y = startY;

    while (x !== endX || y !== endY) {
      if (x > endX) x--;
      else if (x < endX) x++;
      if (y > endY) y--;
      else if (y < endY) y++;
      updateCoordsIntersectCounts(coordsIntersectCounts, x, y);
    }
  }

  const coordsWithOverlaps = Object.values(coordsIntersectCounts).filter((val) => val >= 2).length;

  return coordsWithOverlaps;
};

export function problem2021_5_1(input: string[]) {
  return countIntersectingLines(input);
}

export function problem2021_5_2(input: string[]) {
  return countIntersectingLines(input, false);
}
