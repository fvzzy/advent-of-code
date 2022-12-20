// https://adventofcode.com/2022/day/19
export const title2022_19 = "not enough minerals";

export function problem2022_19_1(input: string[]) {
  let qualityLevel = 0;

  const costs = input.map((blueprint) => {
    const values = blueprint.match(/\d+/g).map(Number);
    return {
      oreRobot: { ore: values[1] },
      clayRobot: { ore: values[2] },
      obsidianRobot: { ore: values[3], clay: values[4] },
      geodeRobot: { ore: values[5], obsidian: values[6] },
    };
  });

  console.log(costs);

  return qualityLevel;
}

export function problem2022_19_2(input: string[]) {}
