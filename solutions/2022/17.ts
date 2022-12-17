// https://adventofcode.com/2022/day/17
export const title2022_17 = "pyroclastic flow";

type RockPart = [number, number];
type Rock = RockPart[];
type Chamber = string[][];

// prettier-ignore
const ROCKS: {parts: Rock, height: number}[] = [
    { parts: [[0,0], [1,0], [2,0], [3,0]], height: 1 }, // horizontal line
    { parts: [[1,0], [0,1], [1,1], [2,1], [1,2]], height: 3 },// cross
    { parts: [[0,2], [1,2], [2,2], [2,1], [2,0]], height: 3 }, // angle
    { parts: [[0,0], [0,1], [0,2], [0,3]], height: 4 }, // vertical line
    { parts: [[0,0], [1,0], [0,1], [1,1]], height: 2 }// square 
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
  let highestOccupiedRow = chamber.length;
  const jetPattern = input[0].split("");
  let jetCount = 0;

  const pushRock = (rock: Rock): Rock => {
    const jet = jetPattern[jetCount % jetPattern.length];
    if (jet === ">") {
      if (canMove("right", rock, chamber)) {
        // console.log("push right");
        rock = rock.map(([x, y]) => [x + 1, y]);
        //   } else {
        //     console.log("push right but nothing happens");
      }
    } else if (jet === "<") {
      if (canMove("left", rock, chamber)) {
        // console.log("push left");
        rock = rock.map(([x, y]) => [x - 1, y]);
        //   } else {
        //     console.log("push left but nothing happens");
      }
    }
    jetCount++;
    return rock;
  };

  for (let turn = 0; turn < 5; turn++) {
    let rock = ROCKS[turn % ROCKS.length].parts;
    rock = rock.map(([x, y]) => [x + INIT_LEFT_GAP, y]);

    // console.log("turn", turn, "rock type", turn % ROCKS.length);
    // console.table(chamber);

    rock = pushRock(rock); // one initial push before falling
    while (canMove("down", rock, chamber)) {
      //   console.log("fall");
      rock = drop(rock);
      rock = pushRock(rock);
    }

    for (let [x, y] of rock) {
      chamber[y][x] = "#"; // settle current rock
      highestOccupiedRow = Math.min(highestOccupiedRow, y); // set a new highest point
    }

    // ensure there's enough space for the next rock to enter
    const nextRockHeight = ROCKS[(turn + 1) % ROCKS.length].height;
    let freeSpaceForNextRock = highestOccupiedRow - nextRockHeight - INIT_TOP_GAP;
    while (freeSpaceForNextRock < 0) {
      chamber.unshift(EMPTY_ROW());
      freeSpaceForNextRock += 1;
      highestOccupiedRow += 1;
    }
  }

  //   console.table(chamber);
  return chamber.slice(highestOccupiedRow).length;
}

export function problem2022_17_2(input: string[]) {}
