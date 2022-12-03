/* 2021 day 2: "dive!" */

export function problem2021_2_1(input: string[]) {
  let x = 0;
  let y = 0;

  const coords = {
    forward: [1, 0],
    up: [0, -1],
    down: [0, 1],
  };

  for (let move of input) {
    if (!move.length) continue; // ignore empty lines in the file

    const [direction, distance] = move.split(" ");
    x += coords[direction][0] * Number(distance);
    y += coords[direction][1] * Number(distance);
  }

  return x * y;
}

export function problem2021_2_2(input: string[]) {
  let x = 0;
  let y = 0;
  let aim = 0;

  for (let move of input) {
    if (!move.length) continue;

    const [command, value] = move.split(" ");
    const valueInt = Number(value);

    switch (command) {
      case "forward":
        x += valueInt;
        y += valueInt * aim;
        break;
      case "up":
        aim -= valueInt;
        break;
      case "down":
        aim += valueInt;
        break;
    }
  }

  return x * y;
}
