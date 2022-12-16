// https://adventofcode.com/2022/day/15
export const title2022_15 = "beacon exclusion zone";

function manhattanDistance(p1x, p1y, p2x, p2y) {
  return Math.abs(p1x - p2x) + Math.abs(p1y - p2y);
}

export function problem2022_15_1(input: string[]) {
  const target = 10;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const coveredPoints: Set<string> = new Set();

  const beaconsXAtTarget = new Set([
    ...reports
      .map((r) => r.slice(-2))
      .filter((b) => b[1] === target)
      .map((b) => b[0]),
  ]);

  for (let [sX, sY, bX, bY] of reports) {
    if (sY === target) coveredPoints.add(`${sX}_${sY}`);
    const distance = manhattanDistance(sX, sY, bX, bY);

    for (let x = sX - distance; x <= sX + distance; x++) {
      if (distance >= manhattanDistance(sX, sY, x, target) && !beaconsXAtTarget.has(x)) {
        coveredPoints.add(`${x}_${target}`);
      }
    }
  }

  return coveredPoints.size;
}

export function problem2022_15_2(input: string[]) {
  // const upperBound = 4000000;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const beacons = new Set([...reports.map((r) => r.slice(-2).join("_"))]);
  const coveredPoints: Set<string> = new Set();

  let target = 3; // need to loop over each row after this returns the correct size...
  for (let [sX, sY, bX, bY] of reports) {
    if (sY === target) coveredPoints.add(`${sX}_${sY}`);
    const distance = manhattanDistance(sX, sY, bX, bY);

    // for (let x = sX - distance; x <= sX + distance && x >= 0 && x <= 20; x++) {
    for (let x = 0; x <= 20; x++) {
      if (distance >= manhattanDistance(sX, sY, x, target) && !beacons.has(`${x}_${target}`)) {
        coveredPoints.add(`${x}_${target}`);
      }
    }
  }

  console.log(coveredPoints);
  console.log(coveredPoints.size);

  // const foundBeacon = [14, 11];
  // return foundBeacon[0] * upperBound + foundBeacon[1];
}
