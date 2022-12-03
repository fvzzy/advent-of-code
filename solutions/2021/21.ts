/* 2021 day 21 */
export const title = "dirac dice";

const startingPositions = (input) => {
  const p1 = Number(input[0].split(": ")[1]);
  const p2 = Number(input[1].split(": ")[1]);
  return { p1, p2 };
};

export function problem2021_21_1(input: string[]) {
  let { p1, p2 } = startingPositions(input);
  let p1Score = 0;
  let p2Score = 0;
  let p1Turn = true;
  let dice = 1;

  const next = (curr, dice) => (curr + 3 * dice + 3) % 10 || 10;

  while (p1Score < 1000 && p2Score < 1000) {
    if (p1Turn) {
      p1 = next(p1, dice);
      p1Score += p1;
    } else {
      p2 = next(p2, dice);
      p2Score += p2;
    }
    dice += 3;
    p1Turn = !p1Turn;
  }

  return (dice - 1) * Math.min(p1Score, p2Score);
}

export function problem2021_21_2(input: string[]) {
  const rolls = {
    3: 1, // [1,1,1]
    4: 3, // [1,1,2], [1,2,1], [2,1,1]
    5: 6, // [1,1,3], [1,3,1], [3,1,1], [2,2,3], [2,3,2], [3,2,2]
    6: 7, // [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2], [2,2,2]
    7: 6, // [1,3,3], [3,1,3], [3,3,1], [2,2,3], [2,3,2], [3,2,2]
    8: 3, // [2,3,3], [3,2,3], [3,3,2]
    9: 1, // [3,3,3]
  };

  let cache = new Map();

  const next = (curr, dice) => (curr + Number(dice)) % 10 || 10;

  const takeTurn = (p1, p2, p1Score, p2Score, p1Turn) => {
    if (p1Score >= 21) return [1, 0];
    if (p2Score >= 21) return [0, 1];

    const key = [p1Turn, p1, p2, p1Score, p2Score].join("-");
    const cached = cache.get(key);
    if (cached) return cached;

    let wins = [0, 0];

    for (let [dice, combos] of Object.entries(rolls)) {
      const [p1Wins, p2Wins] = takeTurn(
        p1Turn ? next(p1, dice) : p1,
        p1Turn ? p2 : next(p2, dice),
        p1Turn ? p1Score + next(p1, dice) : p1Score,
        p1Turn ? p2Score : p2Score + next(p2, dice),
        !p1Turn
      );
      wins[0] += combos * p1Wins;
      wins[1] += combos * p2Wins;
    }

    cache.set(key, wins);
    return wins;
  };

  const { p1, p2 } = startingPositions(input);
  let wins = takeTurn(p1, p2, 0, 0, true);

  return Math.max(...wins);
}
