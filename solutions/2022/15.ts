// https://adventofcode.com/2022/day/15
export const title2022_15 = "beacon exclusion zone";

function manhattanDistance(p1x, p1y, p2x, p2y) {
  return Math.abs(p1x - p2x) + Math.abs(p1y - p2y);
}

export function problem2022_15_1(input: string[]) {
  // const reports = input.map((line) => line.match(/-?\d+/g).map(Number));
  const reports = [[8, 7, 2, 10]]; // example from problem statement
  const coveredPoints = new Set();
  // debugging grid
  // const xVals = reports.map((report) => [report[0], report[2]]).flat();
  // const yVals = reports.map((report) => [report[1], report[3]]).flat();
  // const [minX, minY, maxX, maxY] = [Math.min(...xVals), Math.min(...yVals), Math.max(...xVals), Math.max(...yVals)];
  // const grid = [...Array(maxY - minY + 1)].map(() => [...Array(maxX - minX + 1)].map(() => " "));
  // for (let [sX, sY, bX, bY] of reports) {
  //   grid[sY - minY][sX - minX] = "S";
  //   grid[bY - minY][bX - minX] = "B";
  // }
  // console.table(grid);

  for (let [sX, sY, bX, bY] of reports) {
    coveredPoints.add(`${sX}_${sY}`);
    coveredPoints.add(`${bX}_${bY}`);
    const maxDistance = manhattanDistance(sX, sY, bX, bY);
    // console.log(distance);

    // draw a bounding box around sensor for all possible correct distances
    for (let x = sX - maxDistance; x <= sX + maxDistance; x++) {
      for (let y = sY - maxDistance; y <= sY + maxDistance; y++) {
        // console.log(x, y);
        if (maxDistance >= manhattanDistance(sX, sY, x, y)) {
          coveredPoints.add(`${x}_${y}`);
        }
      }
    }
  }

  console.log(coveredPoints);
}

export function problem2022_15_2(input: string[]) {}
