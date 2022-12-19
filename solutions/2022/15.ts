// https://adventofcode.com/2022/day/15
export const title2022_15 = "beacon exclusion zone";

function manhattanDistance(p1x: number, p1y: number, p2x: number, p2y: number) {
  return Math.abs(p1x - p2x) + Math.abs(p1y - p2y);
}

export function mergeRanges(ranges: number[][]): number[][] {
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0]];

  for (let [start, end] of ranges) {
    // if the current range starts *inside* the last merged range
    const maxValMerged = merged[merged.length - 1][1];
    if (start <= maxValMerged) {
      // merge it with the last merged range
      merged[merged.length - 1][1] = Math.max(end, maxValMerged);
    } else {
      merged.push([start, end]);
    }
  }

  return merged;
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
  const maxXY = input.length === 14 ? 20 : 4e6;
  const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  let foundBeacon: number[];

  for (let y = 0; y <= maxXY; y++) {
    const scannerXRanges: number[][] = [];

    for (let [sX, sY, bX, bY] of reports) {
      const sensorRange = manhattanDistance(sX, sY, bX, bY);
      const distanceToTargetY = manhattanDistance(sX, sY, sX, y);
      const minimumDistance = Math.abs(sensorRange - distanceToTargetY);

      // calculate and store the range that each scanner entirely covers on this line
      if (distanceToTargetY <= sensorRange) {
        const startScanX = Math.max(sX - minimumDistance, 0);
        const endScanX = Math.min(sX + minimumDistance, maxXY);
        scannerXRanges.push([startScanX, endScanX]);
      }
    }

    const mergedRanges = mergeRanges(scannerXRanges);
    if (mergedRanges.length !== 1) {
      foundBeacon = [mergedRanges[1][0] - 1, y];
      break;
    }
  }

  return foundBeacon[0] * 4e6 + foundBeacon[1];
}
