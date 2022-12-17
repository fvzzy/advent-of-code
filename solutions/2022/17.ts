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
    for (let [x, y] of rock) {
      if (y === chamber.length - 1 || chamber[y + 1][x] !== EMPTY) return false;
    }
  } else if (direction === "left") {
    for (let [x, y] of rock) {
      if (x === 0 || chamber[y][x - 1] !== EMPTY) return false;
    }
  } else if (direction === "right") {
    for (let [x, y] of rock) {
      if (x === chamber[0].length - 1 || chamber[y][x + 1] !== EMPTY) return false;
    }
  }
  return true;
}

function drop(rock: Rock): Rock {
  return rock.map(([x, y]) => [x, y + 1]);
}

export function problem2022_17_1(input: string[]): number {
  let chamber = [...Array(INITIAL_ROWS)].map(() => EMPTY_ROW());
  const jetPattern = input[0].split("");
  let jetCount = 0;

  const pushRock = (rock: Rock): Rock => {
    const jet = jetPattern[jetCount % jetPattern.length];
    // console.log(jetCount, shape);
    if (jet === ">" && canMove("right", rock, chamber)) {
      rock = rock.map(([x, y]) => [x + 1, y]);
    } else if (jet === "<" && canMove("left", rock, chamber)) {
      rock = rock.map(([x, y]) => [x - 1, y]);
    }
    jetCount++;
    return rock;
  };

  for (let turn = 0; turn < 2022; turn++) {
    let rock = ROCKS[turn % ROCKS.length].parts;

    rock = rock.map(([x, y]) => [x + INIT_LEFT_GAP, y]);
    // console.log("turn", turn, "shape", ROCKS[turn % ROCKS.length].shape);
    // console.table(chamber);

    rock = pushRock(rock); // one initial push before falling
    while (canMove("down", rock, chamber)) {
      rock = drop(rock);
      rock = pushRock(rock);
    }

    // settle current rock
    for (let [x, y] of rock) {
      chamber[y][x] = "#";
    }

    // remove empty rows from the top of the chamber
    while (chamber[0].every((col) => col === EMPTY)) {
      chamber.shift();
    }

    // ensure there's enough space for the next rock to enter
    const nextRockHeight = ROCKS[(turn + 1) % ROCKS.length].height;
    for (let rows = nextRockHeight + INIT_TOP_GAP; rows > 0; rows--) {
      chamber.unshift(EMPTY_ROW());
    }
  }

  console.table(chamber);

  while (chamber[0].every((col) => col === EMPTY)) {
    chamber.shift();
  }

  return chamber.length;
}

export function problem2022_17_2(input: string[]) {}
