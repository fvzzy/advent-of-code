export const day = 21;
export const title = "dirac dice";

const startingPositions = (input) => {
  const p1 = Number(input[0].split(": ")[1]);
  const p2 = Number(input[1].split(": ")[1]);
  return { p1, p2 };
};

const next = (curr, dice) => (curr + 3 * dice + 3) % 10 || 10;

export function problem21_1(input) {
  let { p1, p2 } = startingPositions(input);
  let p1Score = 0;
  let p2Score = 0;
  let p1Turn = true;
  let dice = 1;

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

export function problem21_2(input) {
  let p1Wins = 0;
  let p2Wins = 0;

  const takeTurn = (p1, p2, p1Score, p2Score, turn) => {
    if (p1Score >= 21) {
      return p1Wins++;
    }
    if (p2Score >= 21) {
      return p2Wins++;
    }
    if (turn <= 3) {
      takeTurn(next(p1, 1), p2, p1Score + next(p1, 1), p2Score, turn + 1);
      takeTurn(next(p1, 2), p2, p1Score + next(p1, 2), p2Score, turn + 1);
      takeTurn(next(p1, 3), p2, p1Score + next(p1, 3), p2Score, turn + 1);
    } else {
      takeTurn(
        p1,
        next(p2, 1),
        p1Score,
        p2Score + next(p2, 1),
        turn >= 6 ? 1 : turn + 1
      );
      takeTurn(
        p1,
        next(p2, 2),
        p1Score,
        p2Score + next(p2, 2),
        turn >= 6 ? 1 : turn + 1
      );
      takeTurn(
        p1,
        next(p2, 3),
        p1Score,
        p2Score + next(p2, 3),
        turn >= 6 ? 1 : turn + 1
      );
    }
  };

  let { p1, p2 } = startingPositions(input);
  takeTurn(p1, p2, 0, 0, 1);

  return Math.max(p1Wins, p2Wins);
}

problem21_2(["Player 1 starting position: 4", "Player 2 starting position: 8"]);
