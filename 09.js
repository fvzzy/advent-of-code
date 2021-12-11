export const day = 9;
export const title = "smoke basin";

export function problem9_1(input) {
  const heightMap = input.map((line) => line.split("").map(Number));

  let riskLevelSum = 0;
  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[0].length; x++) {
      const currentHeight = heightMap[y][x];
      const [up, down, left, right] = [
        heightMap[y - 1]?.[x] ?? Infinity,
        heightMap[y + 1]?.[x] ?? Infinity,
        heightMap[y]?.[x - 1] ?? Infinity,
        heightMap[y]?.[x + 1] ?? Infinity,
      ];
      if (
        currentHeight < up &&
        currentHeight < down &&
        currentHeight < left &&
        currentHeight < right
      ) {
        riskLevelSum += currentHeight + 1;
      }
    }
  }

  return riskLevelSum;
}

export function problem9_2(input) {}
