export const day = 13;
export const title = "transparent origami";

const readInstructions = (input) => {
  let line = -1;
  let dots = [];
  let folds = [];
  while (input[++line] !== "") {
    dots.push(input[line].split(","));
  }
  while (input[++line]) {
    folds.push(input[line].replace("fold along ", ""));
  }
  return { dots, folds };
};

const markDots = (dots) => {
  const maxX = Math.max(...dots.map((xy) => xy[0])) + 1;
  const maxY = Math.max(...dots.map((xy) => xy[1])) + 1;
  let paper = Array(maxY)
    .fill()
    .map(() => Array(maxX).fill("."));

  for (let dotXY of dots) {
    paper[dotXY[1]][dotXY[0]] = "#";
  }
  return paper;
};

const foldUp = (paper, foldLine) => {
  let row1 = foldLine;
  let row2 = foldLine;

  while (--row1 >= 0 && ++row2 < paper.length) {
    for (let x = 0; x < paper[0].length; x++) {
      if (paper[row2][x] === "#") paper[row1][x] = "#";
    }
  }

  return paper.slice(0, foldLine);
};

const foldLeft = (paper, foldLine) => {
  let col1 = foldLine;
  let col2 = foldLine;

  while (--col1 >= 0 && ++col2 < paper[0].length) {
    for (let y = 0; y < paper.length; y++) {
      if (paper[y][col2] === "#") paper[y][col1] = "#";
    }
  }

  return paper.map((row) => row.slice(0, foldLine));
};

const fold = (paper, folds) => {
  for (let fold of folds) {
    let [axis, foldLine] = fold.split("=");
    if (axis === "y") paper = foldUp(paper, Number(foldLine));
    if (axis === "x") paper = foldLeft(paper, Number(foldLine));
  }

  return paper;
};

const countDots = (paper) => {
  let dotCount = 0;
  for (let y = 0; y < paper.length; y++) {
    for (let x = 0; x < paper[0].length; x++) {
      if (paper[y][x] === "#") dotCount++;
    }
  }
  return dotCount;
};

export function problem13_1(input) {
  const { dots, folds } = readInstructions(input);
  let paper = markDots(dots);
  paper = fold(paper, [folds[0]]);
  return countDots(paper);
}

}
export function problem13_2(input) {}
