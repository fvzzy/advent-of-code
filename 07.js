export const day = 7;
export const title = "the treachery of whales";

export function problem7_1(input) {
  const crabs = input[0].split(",").map(Number);
  const [min, max] = [Math.min(...crabs), Math.max(...crabs)];
  const positions = Array(max - min + 1)
    .fill()
    .map((_, idx) => min + idx);

  return Math.min(
    ...positions.map((position) =>
      crabs
        .map((crab) => Math.abs(crab - position))
        .reduce((fuel, totalFuel) => fuel + totalFuel, 0)
    )
  );
}

export function problem7_2(input) {}
