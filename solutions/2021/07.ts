/* 2021 day 7: "the treachery of whales" */

const fuelForAligment = (input, fuelCalc) => {
  const crabs = input[0].split(",").map(Number);
  const [min, max] = [Math.min(...crabs), Math.max(...crabs)];
  const positions = Array(max - min + 1)
    .fill(undefined)
    .map((_, idx) => min + idx);

  return Math.min(
    ...positions.map((position) =>
      crabs.map((crab) => fuelCalc(Math.abs(crab - position))).reduce((fuel, totalFuel) => fuel + totalFuel, 0)
    )
  );
};

export function problem2021_7_1(input: string[]) {
  return fuelForAligment(input, (x) => x);
}

export function problem2021_7_2(input: string[]) {
  const fuelCalc = (distance) => (distance * (distance + 1)) / 2;
  return fuelForAligment(input, fuelCalc);
}
