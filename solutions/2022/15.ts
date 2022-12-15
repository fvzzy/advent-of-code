// https://adventofcode.com/2022/day/15
export const title2022_15 = "beacon exclusion zone";

function manhattanDistance(p1x, p1y, p2x, p2y) {
  return Math.abs(p1x - p2x) + Math.abs(p1y - p2y);
}

export function problem2022_15_1(input: string[]) {
  const targetRow = 2000000;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const coveredPoints: Set<string> = new Set();

  const beaconsXInTargetRow = new Set([
    ...reports
      .map((r) => r.slice(-2))
      .filter((b) => b[1] === targetRow)
      .map((b) => b[0]),
  ]);

  for (let [sX, sY, bX, bY] of reports) {
    if (sY === targetRow) coveredPoints.add(`${sX}_${sY}`);
    const maxDistance = manhattanDistance(sX, sY, bX, bY);

    for (let x = sX - maxDistance; x <= sX + maxDistance; x++) {
      if (maxDistance >= manhattanDistance(sX, sY, x, targetRow) && !beaconsXInTargetRow.has(x)) {
        coveredPoints.add(`${x}_${targetRow}`);
      }
    }
  }

  return coveredPoints.size;
}

export function problem2022_15_2(input: string[]) {}
