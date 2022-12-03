export const day = 9;
export const title = "smoke basin";

const findLowPoints = (heightMap) => {
  let lowPoints = [];
  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[0].length; x++) {
      const currentHeight = heightMap[y][x];
      const [up, down, left, right] = [
        heightMap[y - 1]?.[x] ?? Infinity,
        heightMap[y + 1]?.[x] ?? Infinity,
        heightMap[y]?.[x - 1] ?? Infinity,
        heightMap[y]?.[x + 1] ?? Infinity,
      ];
      if (currentHeight < up && currentHeight < down && currentHeight < left && currentHeight < right) {
        lowPoints.push({ x, y });
      }
    }
  }
  return lowPoints;
};

export function problem2021_9_1(input) {
  const heightMap = input.map((line) => line.split("").map(Number));
  const lowPoints = findLowPoints(heightMap);

  return lowPoints.reduce((riskSum, point) => riskSum + heightMap[point.y][point.x] + 1, 0);
}

export function problem2021_9_2(input) {
  const heightMap = input.map((line) => line.split("").map(Number));
  const lowPoints = findLowPoints(heightMap);
  let basins = [];
  let size = 0;

  const dfs = (y, x) => {
    // stop counting if we're at a boundary, or a "peak" (9)
    if (heightMap[y]?.[x] === undefined || heightMap[y]?.[x] === 9) return;
    heightMap[y][x] = 9;
    size++;
    dfs(y - 1, x);
    dfs(y + 1, x);
    dfs(y, x - 1);
    dfs(y, x + 1);
  };

  for (let point of lowPoints) {
    dfs(point.y, point.x);
    basins.push(size);
    size = 0;
  }

  basins.sort((a, b) => b - a);
  return basins[0] * basins[1] * basins[2];
}
