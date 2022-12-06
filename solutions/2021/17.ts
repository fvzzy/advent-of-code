// https://adventofcode.com/2021/day/17
export const title2021_17 = "trick shot";

const parseTargetArea = (input) => input[0].match(/\-?\d+/g);

const nextPos = (x, y, vx, vy) => {
  x += vx;
  y += vy;
  if (vx > 0) vx -= 1;
  else if (vx < 0) vx += 1;
  vy -= 1;
  return [x, y, vx, vy];
};

const probeInTarget = (x, y, targetArea) => {
  const [tx1, tx2, ty1, ty2] = targetArea;
  return tx1 <= x && tx2 >= x && ty1 <= y && ty2 >= y;
};

const probeBeyondTarget = (x, y, vx, vy, targetArea) => {
  const [tx1, tx2, ty1] = targetArea;
  return (vx < 0 && x < tx1) || (x > 0 && x > tx2) || (vy < 0 && y < ty1);
};

const fireProbe = (vx, vy, targetArea) => {
  let [x, y] = [0, 0];
  let maxY = -Infinity;

  while (!probeInTarget(x, y, targetArea)) {
    [x, y, vx, vy] = nextPos(x, y, vx, vy);
    maxY = Math.max(maxY, y);

    if (probeBeyondTarget(x, y, vx, vy, targetArea)) {
      return null;
    }
  }

  return maxY;
};

const spamProbes = (targetArea) => {
  let maxHeightOverall = -Infinity;
  let validShots = 0;

  let vy = Math.abs(targetArea[2]); // on the downward trajectory, if the probe is moving faster than this it'll miss the target
  while (vy >= targetArea[2]) {
    let vx = 0;
    while (vx <= 200) {
      const maxHeight = fireProbe(vx, vy, targetArea);
      maxHeightOverall = Math.max(maxHeightOverall, maxHeight);
      if (maxHeight !== null) validShots += 1;
      vx += 1;
    }
    vy -= 1;
  }

  return { maxHeight: maxHeightOverall, validShots };
};

export function problem2021_17_1(input: string[]) {
  const targetArea = parseTargetArea(input);
  return spamProbes(targetArea).maxHeight;
}

export function problem2021_17_2(input: string[]) {
  const targetArea = parseTargetArea(input);
  return spamProbes(targetArea).validShots;
}
