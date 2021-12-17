export const day = 17;
export const title = "trick shot";

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
      return -Infinity;
    }
  }

  return maxY;
};

export function problem17_1(input) {
  const targetArea = parseTargetArea(input);
  let maxHeight = -Infinity;

  let vy = Math.abs(targetArea[2]); // on the way down, if the probe is moving faster than this it'll miss the target
  while (vy >= 0) {
    let vx = 0;
    while (vx <= 100) {
      maxHeight = Math.max(fireProbe(vx, vy, targetArea), maxHeight);
      vx += 1;
    }
    vy -= 1;
  }

  return maxHeight;
}

export function problem17_2(input) {}
