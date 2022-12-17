// https://adventofcode.com/2022/day/17
export const title2022_17 = "pyroclastic flow";

type RockPart = [number, number];
type Rock = RockPart[];
type Chamber = string[][];

// prettier-ignore
const ROCKS: Rock[] = [
    [[0,0], [1,0], [2,0], [3,0]], // horizontal line
    [[1,0], [0,1], [1,1], [2,1], [1,2]], // cross
    [[0,0], [1,0], [2,0], [2,1], [2,3]], // angle
    [[0,0], [0,1], [0,2], [0,3]], // vertical line
    [[0,0],[1,0],[0,1], [1,1]] // square 
]

const INITIAL_ROWS = 4;
const COLS = 7;
const EMPTY = ".";

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
  let chamber = [...Array(INITIAL_ROWS)].map(() => [...Array(COLS)].map(() => EMPTY));

  const jetPattern = input[0].split("");
  let jetCount = 0;

  const pushRock = (rock: Rock): Rock => {
    const jet = jetPattern[jetCount % jetPattern.length];
    if (jet === ">") {
      if (canMove("right", rock, chamber)) {
        console.log("push right");
        rock = rock.map(([x, y]) => [x + 1, y]);
      } else {
        console.log("push right but nothing happens");
      }
    } else if (jet === "<") {
      if (canMove("left", rock, chamber)) {
        console.log("push left");
        rock = rock.map(([x, y]) => [x - 1, y]);
      } else {
        console.log("push left but nothing happens");
      }
    }
    jetCount++;
    return rock;
  };

  for (let turn = 0; turn < 1; turn++) {
    let rock = ROCKS[turn % ROCKS.length];
    rock = rock.map(([x, y]) => [x + 2, y]); // initialise rock two over from the left

    // expand chamber height here
    while (canMove("down", rock, chamber)) {
      console.log("fall");
      rock = drop(rock);
      rock = pushRock(rock);
    }

    // one more push at the bottom
    rock = pushRock(rock);

    for (let [x, y] of rock) chamber[y][x] = "#";
  }

  console.table(chamber);
  return chamber.length;
}

export function problem2022_17_2(input: string[]) {}
