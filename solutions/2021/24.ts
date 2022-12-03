export const day = 24;
export const title = "arithmetic logic unit";

const operations = {
  inp: (a, b, res) => (res[a] = b),
  add: (a, b, res) => (res[a] += b),
  mul: (a, b, res) => (res[a] *= b),
  div: (a, b, res) => (res[a] = Math.floor(res[a] / b)),
  mod: (a, b, res) => (res[a] %= b),
  eql: (a, b, res) => (res[a] = res[a] === b ? 1 : 0),
};

const readInstruction = (instruction) => {
  const [op, a, b] = instruction.split(" ");
  return { op, a, b };
};

const isValidModelNo = (modelNo, instructions) => {
  let res = { w: 0, x: 0, y: 0, z: 0 };
  let cursor = -1;

  for (let line = 0; line < instructions.length; line++) {
    let { op, a, b } = readInstruction(instructions[line]);
    // read in the next input number as b, otherwise process the operation
    if (op === "inp") b = Number(modelNo.toString()[++cursor]);
    b = isNaN(parseInt(b)) ? res[b] : parseInt(b);
    operations[op](a, b, res);
  }

  return res.z === 0;
};

export function problem2021_24_1(input) {
  let minN = 11111111111111;
  for (let n = 99999999999999; n >= minN; n--) {
    if (String(n).includes("0")) continue;
    if (isValidModelNo(n, input)) return n;
  }

  return minN;
}

export function problem2021_24_2(input) {}
