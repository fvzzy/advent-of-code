// https://adventofcode.com/2022/day/17
export const title2022_17 = "pyroclastic flow";

type RockPart = [number, number];
type Rock = RockPart[];
type Chamber = string[][];

// prettier-ignore
const ROCKS: { parts: Rock, height: number, shape: string }[] = [
    { parts: [[0,0], [1,0], [2,0], [3,0]], height: 1, shape: 'hline' },
    { parts: [[1,0], [0,1], [1,1], [2,1], [1,2]], height: 3, shape: 'cross' },
    { parts: [[0,2], [1,2], [2,2], [2,1], [2,0]], height: 3, shape: 'angle' },
    { parts: [[0,0], [0,1], [0,2], [0,3]], height: 4, shape: 'vline' },
    { parts: [[0,0], [1,0], [0,1], [1,1]], height: 2, shape: 'square' }
]

const INITIAL_ROWS = 4;
const COLS = 7;
const EMPTY = " ";
const EMPTY_ROW = () => [...Array(COLS)].map(() => EMPTY);
const INIT_LEFT_GAP = 2;
const INIT_TOP_GAP = 3;

function canMove(direction: "down" | "left" | "right", rock: Rock, chamber: Chamber) {
  if (direction === "down") {
    return rock.every(([x, y]) => y !== chamber.length - 1 && chamber[y + 1][x] === EMPTY);
  } else if (direction === "left") {
    return rock.every(([x, y]) => x !== 0 && chamber[y][x - 1] === EMPTY);
  } else if (direction === "right") {
    return rock.every(([x, y]) => x !== chamber[0].length - 1 && chamber[y][x + 1] === EMPTY);
  }
}

function fall(rock: Rock): Rock {
  return rock.map(([x, y]) => [x, y + 1]);
}

function pushRock(rock: Rock, chamber: Chamber, jetPattern: string[], currentJetIdx: number): Rock {
  const jet = jetPattern[currentJetIdx % jetPattern.length];
  if (jet === ">" && canMove("right", rock, chamber)) {
    rock = rock.map(([x, y]) => [x + 1, y]);
  } else if (jet === "<" && canMove("left", rock, chamber)) {
    rock = rock.map(([x, y]) => [x - 1, y]);
  }
  return rock;
}

function removeEmptySpace(chamber: Chamber) {
  while (chamber[0].every((col) => col === EMPTY)) chamber.shift();
}

function towerHeight(input: string[], turns: number) {
  let chamber = [...Array(INITIAL_ROWS)].map(() => EMPTY_ROW());
  const jetPattern = input[0].split("");
  let currentJetIdx = 0;
  let towerHeight = 0;

  for (let turn = 0; turn < 2022; turn++) {
    let rock = ROCKS[turn % ROCKS.length].parts;

    // initialise rock two over from the left wall
    rock = rock.map(([x, y]) => [x + INIT_LEFT_GAP, y]);

    // one initial push before falling
    rock = pushRock(rock, chamber, jetPattern, currentJetIdx);
    currentJetIdx++;

    // repeat fall + push
    while (canMove("down", rock, chamber)) {
      rock = fall(rock);
      rock = pushRock(rock, chamber, jetPattern, currentJetIdx);
      currentJetIdx++;
    }

    // settle current rock
    for (let [x, y] of rock) chamber[y][x] = "#";

    removeEmptySpace(chamber);
    // if (chamber[0])

    // ensure there's just enough space for the next rock to start at y=0
    const nextRockHeight = ROCKS[(turn + 1) % ROCKS.length].height;
    for (let rows = nextRockHeight + INIT_TOP_GAP; rows > 0; rows--) {
      chamber.unshift(EMPTY_ROW());
    }
  }

  removeEmptySpace(chamber);
  return chamber.length;
}

export function problem2022_17_1(input: string[]): number {
  return towerHeight(input, 2022);
}

export function problem2022_17_2(input: string[]) {
  return towerHeight(input, 1000000000000);
}
