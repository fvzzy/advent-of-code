// https://adventofcode.com/2022/day/15
export const title2022_15 = "beacon exclusion zone";

function manhattanDistance(p1x: number, p1y: number, p2x: number, p2y: number) {
  return Math.abs(p1x - p2x) + Math.abs(p1y - p2y);
}

export function problem2022_15_1(input: string[]) {
  const target = input.length === 14 ? 10 : 2000000;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const coveredPoints: Set<number> = new Set();

  const beaconsXAtTarget = new Set([
    ...reports
      .map((r) => r.slice(-2))
      .filter((b) => b[1] === target)
      .map((b) => b[0]),
  ]);

  for (let [sX, sY, bX, bY] of reports) {
    if (sY === target) coveredPoints.add(sX); // add sensor to covered points since a beacon can't also exist there
    const distance = manhattanDistance(sX, sY, bX, bY);

    for (let x = sX - distance; x <= sX + distance; x++) {
      // iterate through points that could fall in the sensor's reach
      if (distance >= manhattanDistance(sX, sY, x, target) && !beaconsXAtTarget.has(x)) {
        coveredPoints.add(x);
      }
    }
  }

  return coveredPoints.size;
}

export function problem2022_15_2(input: string[]) {
  const maxXY = input.length === 14 ? 20 : 4000000;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const beacons = new Set([...reports.map((r) => r.slice(-2).join("_"))]);
  const coveredPoints: Set<string> = new Set();
  let foundBeacon: number[];

  for (let y = 0; y <= maxXY; y++) {
    for (let [sX, sY, bX, bY] of reports) {
      if (sY === y) coveredPoints.add(`${sX}`);
      const distance = manhattanDistance(sX, sY, bX, bY);
      for (let x = Math.max(sX - distance, 0); x <= Math.min(sX + distance, maxXY); x++) {
        if (distance >= manhattanDistance(sX, sY, x, y) && !beacons.has(`${x}`)) {
          coveredPoints.add(`${x}`);
        }
      }
    }

    if (coveredPoints.size !== maxXY + 1) {
      for (let i = 0; i <= maxXY; i++) {
        if (!coveredPoints.has(`${i}`)) {
          foundBeacon = [i, y];
          break;
        }
      }
      break;
    }

    coveredPoints.clear();
  }

  return foundBeacon[0] * 4000000 + foundBeacon[1];
}
