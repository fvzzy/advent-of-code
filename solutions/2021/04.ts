export const day = 4;
export const title = "giant squid";

const processInput = (input) => {
  const numbers = input[0].split(",");

  let board = 0;
  let boards = {};

  for (let line = 1; line < input.length; line++) {
    // if we're at the blank line before a new board, initialise an empty board
    if (!input[line].length) {
      board += 1;
      boards[board] = [];
      continue;
    }

    // arrange boards represented as matrices, with spaces filtered out
    boards[board].push(input[line].split(" ").filter((c) => c.length));
  }

  return { numbers, boards };
};

const boardTotalSums = (boards) => {
  let result = {};

  for (let boardIdx in boards) {
    const board = boards[boardIdx];
    result[boardIdx] = 0;

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        result[boardIdx] += Number(board[row][col]);
      }
    }
  }

  return result;
};

const boardToRowColSets = (board) => {
  let result = { rows: [], cols: [] };

  for (let row = 0; row < board.length; row++) {
    result.rows[row] = new Set(board[row]);

    for (let col = 0; col < board[0].length; col++) {
      const value = board[row][col];

      if (row === 0) {
        result.cols[col] = new Set([value]);
      } else {
        result.cols[col].add(value);
      }
    }
  }

  return result;
};

const boardsToRowColSets = (boards) => {
  let result = {};

  for (let boardNumber in boards) {
    result[boardNumber] = boardToRowColSets(boards[boardNumber]);
  }

  return result;
};

const winningBingoScore = (input, lastBoardWins = false) => {
  const { numbers, boards } = processInput(input);
  const rowsColsSets = boardsToRowColSets(boards);
  const boardUnmarkedSum = boardTotalSums(boards);
  const activeBoards = new Set(Object.keys(boards));

  for (let calledNumber of numbers) {
    for (let boardNumber in rowsColsSets) {
      // skip boards that have already won
      if (!activeBoards.has(boardNumber)) continue;

      for (let seriesType in rowsColsSets[boardNumber]) {
        const series = rowsColsSets[boardNumber][seriesType];

        for (let setIdx = 0; setIdx < series.length; setIdx++) {
          const set = series[setIdx];

          // ignore if this row/column in this board doesn't have the number
          if (!set.has(calledNumber)) continue;

          // "mark off" a value in its series (row or column)
          set.delete(calledNumber);

          // calculate the remaining total of all numbers in this board
          // check if we're on a row set so we only subtract the value once
          if (seriesType === "rows")
            boardUnmarkedSum[boardNumber] -= calledNumber;

          // bingo!
          if (set.size === 0) {
            if (!lastBoardWins) {
              return calledNumber * boardUnmarkedSum[boardNumber];
            }

            // remove winning boards from active set
            activeBoards.delete(boardNumber);

            // return answer if this is the last board
            if (activeBoards.size === 0) {
              return calledNumber * boardUnmarkedSum[boardNumber];
            }
          }
        }
      }
    }
  }
};

export function problem4_1(input) {
  return winningBingoScore(input);
}

export function problem4_2(input) {
  return winningBingoScore(input, true);
}
