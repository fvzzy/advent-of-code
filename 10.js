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

const firstIllegalChar = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (
      closingParens[str[i]] &&
      stack[stack.length - 1] === closingParens[str[i]]
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  for (let paren of stack) {
    if (closingParens[paren]) return paren;
  }
};

export function problem10_1(input) {
  let syntaxErrorScore = 0;
  for (let line of input) {
    syntaxErrorScore += illegalCharScore[firstIllegalChar(line)] || 0;
  }
  return syntaxErrorScore;
}

export function problem10_2(input) {}
