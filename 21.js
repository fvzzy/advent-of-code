export const day = 21;
export const title = "dirac dice";

const startingPositions = (input) => {
  const p1 = Number(input[0].split(": ")[1]);
  const p2 = Number(input[1].split(": ")[1]);
  return { p1, p2 };
};

export function problem21_1(input) {
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

export function problem21_2(input) {}
