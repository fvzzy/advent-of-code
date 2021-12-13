export const day = 13;
export const title = "transparent origami";

export function problem13_1(input) {
  const countDots = (input) => {
    let line = -1;
    let dots = [];
    while (input[++line] !== "") {
      dots.push(input[line].split(","));
    }

    const maxX = Math.max(...dots.map((xy) => xy[0])) + 1;
    const maxY = Math.max(...dots.map((xy) => xy[1])) + 1;
    let paper = Array(maxY)
      .fill()
      .map(() => Array(maxX).fill("."));

    for (let dotXY of dots) {
      paper[dotXY[1]][dotXY[0]] = "#";
    }

    let folds = [];
    while (input[++line]) {
      folds.push(input[line].replace("fold along ", ""));
    }

    // for part 1 only
    folds = [folds[0]];

    for (let fold of folds) {
      let [axis, foldLine] = fold.split("=");
      foldLine = Number(foldLine);

      if (axis === "y") {
        let half1 = foldLine;
        let half2 = foldLine;
        while (--half1 >= 0 && ++half2 < paper.length) {
          for (let x = 0; x < paper[0].length; x++) {
            if (paper[half2][x] === "#") paper[half1][x] = "#";
          }
        }
        paper = paper.slice(0, foldLine);
      }

      if (axis === "x") {
        let half1 = foldLine;
        let half2 = foldLine;
        while (--half1 >= 0 && ++half2 < paper[0].length) {
          for (let y = 0; y < paper.length; y++) {
            if (paper[y][half2] === "#") paper[y][half1] = "#";
          }
        }
        paper = paper.map((row) => row.slice(0, foldLine));
      }
    }

    let dotCount = 0;
    for (let y = 0; y < paper.length; y++) {
      for (let x = 0; x < paper[0].length; x++) {
        if (paper[y][x] === "#") dotCount++;
      }
    }
    return dotCount;
  };

  return countDots(input);
}
export function problem13_2(input) {}
