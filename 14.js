export const day = 14;
export const title = "extended polymerization";

const instructions = (input) => {
  const polymer = input[0];
  let rules = {};
  for (let line = 2; line < input.length; line++) {
    const [pair, insert] = input[line].split(" -> ");
    rules[pair] = insert;
  }

  return { polymer, rules };
};

const maxElementCountDiff = (counts) => {
  let minFrequency = Infinity;
  let maxFrequency = -Infinity;
  for (let element in counts) {
    minFrequency = Math.min(minFrequency, counts[element]);
    maxFrequency = Math.max(maxFrequency, counts[element]);
  }

  return maxFrequency - minFrequency;
};

export function problem14_1(input) {
  const { polymer: _polymer, rules } = instructions(input);
  let polymer = _polymer;

  let steps = 10;
  while (steps--) {
    let nextPolymer = "";
    for (let i = 0; i < polymer.length - 1; i++) {
      nextPolymer += polymer[i] + rules[`${polymer[i]}${polymer[i + 1]}`];
    }
    polymer = nextPolymer + polymer[polymer.length - 1];
  }

  let counts = {};
  for (let i = 0; i < polymer.length; i++) {
    counts[polymer[i]] ? counts[polymer[i]]++ : (counts[polymer[i]] = 1);
  }

  return maxElementCountDiff(counts);
}

export function problem14_2(input) {
  const { polymer, rules } = instructions(input);

  let pairFrequencies = {};
  for (let i = 0; i < polymer.length - 1; i++) {
    const pair = polymer[i] + polymer[i + 1];
    pairFrequencies[pair]
      ? pairFrequencies[pair]++
      : (pairFrequencies[pair] = 1);
  }

  let steps = 40;
  while (steps--) {
    let nextFrequencies = {};

    for (let pair in pairFrequencies) {
      const pairCount = pairFrequencies[pair];
      const insert = rules[pair];
      const mutation1 = pair[0] + insert;
      const mutation2 = insert + pair[1];

      if (!(mutation1 in nextFrequencies)) nextFrequencies[mutation1] = 0;
      if (!(mutation2 in nextFrequencies)) nextFrequencies[mutation2] = 0;

      nextFrequencies[mutation1] += pairCount;
      nextFrequencies[mutation2] += pairCount;
    }

    pairFrequencies = { ...nextFrequencies };
  }

  let elementCounts = {};
  for (let pair in pairFrequencies) {
    if (!(pair[0] in elementCounts)) elementCounts[pair[0]] = 0;
    if (!(pair[1] in elementCounts)) elementCounts[pair[1]] = 0;
    elementCounts[pair[0]] += pairFrequencies[pair];
    elementCounts[pair[1]] += pairFrequencies[pair];
  }

  // each of our elements is counted twice in each pair, so halve the counts
  // round up to correct the first and last element in the polymer string being counted once
  for (let element in elementCounts) {
    elementCounts[element] = Math.round(elementCounts[element] / 2);
  }

  return maxElementCountDiff(counts);
}
