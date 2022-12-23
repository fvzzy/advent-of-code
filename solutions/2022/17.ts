// https://adventofcode.com/2022/day/17
export const title2022_17 = "pyroclastic flow";

type RockPart = [number, number];
type Rock = RockPart[];
type Chamber = number[][];

// prettier-ignore
const ROCKS: { parts: Rock, height: number }[] = [
    { parts: [[0,0], [1,0], [2,0], [3,0]], height: 1 },
    { parts: [[1,0], [0,1], [1,1], [2,1], [1,2]], height: 3 },
    { parts: [[0,2], [1,2], [2,2], [2,1], [2,0]], height: 3 },
    { parts: [[0,0], [0,1], [0,2], [0,3]], height: 4 },
    { parts: [[0,0], [1,0], [0,1], [1,1]], height: 2 }
]

const INITIAL_ROWS = 4;
const COLS = 7;
const VOID_SYM = 0;
const ROCK_SYM = 1;
const EMPTY_ROW = () => [...Array(COLS)].map(() => VOID_SYM);
const INIT_LEFT_GAP = 2;
const INIT_TOP_GAP = 3;

function canMove(direction: "down" | "left" | "right", rock: Rock, chamber: Chamber) {
  if (direction === "down") {
    return rock.every(([x, y]) => y !== chamber.length - 1 && chamber[y + 1][x] === VOID_SYM);
  } else if (direction === "left") {
    return rock.every(([x, y]) => x !== 0 && chamber[y][x - 1] === VOID_SYM);
  } else if (direction === "right") {
    return rock.every(([x, y]) => x !== chamber[0].length - 1 && chamber[y][x + 1] === VOID_SYM);
  }
}

function fall(rock: Rock): Rock {
  return rock.map(([x, y]) => [x, y + 1]);
}

function pushRock(rock: Rock, chamber: Chamber, jetSequence: string[], jetIdx: number): Rock {
  const jet = jetSequence[jetIdx];
  if (jet === ">" && canMove("right", rock, chamber)) {
    rock = rock.map(([x, y]) => [x + 1, y]);
  } else if (jet === "<" && canMove("left", rock, chamber)) {
    rock = rock.map(([x, y]) => [x - 1, y]);
  }
  return rock;
}

function removeEmptySpace(chamber: Chamber) {
  while (chamber[0].every((col) => col === VOID_SYM)) chamber.shift();
}

function towerHeight(input: string[], turns: number) {
  let chamber = [...Array(INITIAL_ROWS)].map(() => EMPTY_ROW());
  const jetSequence = input[0].split("");
  let jetIdx = 0;
  let skippedHeight = 0;
  const snapshots = {};

  for (let turn = 0; turn < turns; turn++) {
    const rockIdx = turn % ROCKS.length;
    let rock = ROCKS[rockIdx].parts;

    // initialise rock two over from the left wall
    rock = rock.map(([x, y]) => [x + INIT_LEFT_GAP, y]);

    // one initial push before falling
    rock = pushRock(rock, chamber, jetSequence, jetIdx);
    jetIdx = (jetIdx + 1) % jetSequence.length;

    // repeat fall + push
    while (canMove("down", rock, chamber)) {
      rock = fall(rock);
      rock = pushRock(rock, chamber, jetSequence, jetIdx);
      jetIdx = (jetIdx + 1) % jetSequence.length;
    }

    // settle current rock
    for (let [x, y] of rock) chamber[y][x] = ROCK_SYM;

    removeEmptySpace(chamber);

    // store snapshot of current state, including the pattern of the top rows
    // the number of rows to slice from the top was trial and error; for my input
    // this stabilised and continued passing for test data after 12
    const headRowsPattern = chamber.slice(0, 12).flat().join("");
    const currentState = `${rockIdx}_${jetIdx}_${headRowsPattern}`;

    // check if we've seen this state before, fast-forward if we have
    if (!snapshots[currentState]) {
      snapshots[currentState] = { turn, height: chamber.length };
    } else {
      const { turn: turnAtSnapshot, height: heightAtSnapshot } = snapshots[currentState];
      const turnsToSkip = turn - turnAtSnapshot;
      const skips = Math.floor((turns - turnAtSnapshot) / turnsToSkip) - 1;
      const heightPerSkip = chamber.length - heightAtSnapshot;
      skippedHeight += skips * heightPerSkip;
      turn += skips * turnsToSkip;
    }

    // ensure there's just enough space for the next rock to start at y=0
    const nextRockHeight = ROCKS[(turn + 1) % ROCKS.length].height;
    for (let rows = nextRockHeight + INIT_TOP_GAP; rows > 0; rows--) {
      chamber.unshift(EMPTY_ROW());
    }
  }

  removeEmptySpace(chamber);
  return chamber.length + skippedHeight;
}

export function problem2022_17_1(input: string[]): number {
  return towerHeight(input, 2022);
}

export function problem2022_17_2(input: string[]): number {
  return towerHeight(input, 1000000000000);
}
