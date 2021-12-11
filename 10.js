export const day = 10;
export const title = "syntax scoring";

const illegalCharScore = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const closingParens = {
  ")": "(",
  "]": "[",
  "}": "{",
  ">": "<",
};

const completionScore = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

const openingParens = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const corruptOrIncompleteLineParts = (line) => {
  let stack = [];
  for (let i = 0; i < line.length; i++) {
    if (
      closingParens[line[i]] &&
      stack[stack.length - 1] === closingParens[line[i]]
    ) {
      stack.pop();
    } else {
      stack.push(line[i]);
    }
  }

  return stack;
};

const isCorrupted = (parens) => {
  for (let paren of parens) {
    if (closingParens[paren]) return true;
  }
  return false;
};

const firstIllegalChar = (parens) => {
  for (let paren of parens) {
    if (closingParens[paren]) return paren;
  }
};

const autocompleteScore = (parens) => {
  let score = 0;
  for (let i = parens.length - 1; i >= 0; i--) {
    score = score * 5 + completionScore[openingParens[parens[i]]];
  }
  return score;
};

export function problem10_1(input) {
  return input
    .map(corruptOrIncompleteLineParts)
    .filter(isCorrupted)
    .map(firstIllegalChar)
    .reduce((errorScore, paren) => errorScore + illegalCharScore[paren], 0);
}

export function problem10_2(input) {
  const scores = input
    .map(corruptOrIncompleteLineParts)
    .filter((line) => !isCorrupted(line))
    .map(autocompleteScore)
    .sort((a, b) => a - b);

  return scores[Math.floor(scores.length / 2)];
}
