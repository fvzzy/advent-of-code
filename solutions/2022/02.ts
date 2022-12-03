/* 2022 day 2: "rock paper scissors" */

export function problem2022_2_1(input: string[]) {
  const shapeScore = { X: 1, Y: 2, Z: 3 };
  const outcomeScore = { LOSS: 0, DRAW: 3, WIN: 6 };
  const outcomes = {
    A: { X: "DRAW", Y: "WIN", Z: "LOSS" },
    B: { X: "LOSS", Y: "DRAW", Z: "WIN" },
    C: { X: "WIN", Y: "LOSS", Z: "DRAW" },
  };

  let total = 0;
  for (let play of input) {
    const [oppPlay, ownPlay] = play.split(" ");
    const score = shapeScore[ownPlay] + outcomeScore[outcomes[oppPlay][ownPlay]];
    total += score;
  }
  return total;
}

export function problem2022_2_2(input: string[]) {
  const outcomeScore = { X: 0, Y: 3, Z: 6 };
  const shapeScore = { A: 1, B: 2, C: 3 };
  const requiredPlay = {
    A: { X: "C", Y: "A", Z: "B" },
    B: { X: "A", Y: "B", Z: "C" },
    C: { X: "B", Y: "C", Z: "A" },
  };

  let total = 0;
  for (let play of input) {
    const [oppPlay, requiredOutcome] = play.split(" ");
    const ownPlay = requiredPlay[oppPlay][requiredOutcome];
    const score = outcomeScore[requiredOutcome] + shapeScore[ownPlay];
    total += score;
  }
  return total;
}
