/* 2021 day 14: "extended polymerization" */

const processInstructions = (input) => {
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

export function problem2021_14_1(input: string[]) {
  const { polymer: _polymer, rules } = processInstructions(input);
  let polymer = _polymer;

  // naive solution to calculate the resultant polymer
  // constrained by memory to ~32 steps
  for (let step = 0; step < 10; step++) {
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

export function problem2021_14_2(input: string[]) {
  const { polymer, rules } = processInstructions(input);

  // save frequency counts of each pair of characters
  let pairFrequencies = {};
  for (let i = 0; i < polymer.length - 1; i++) {
    const pair = polymer[i] + polymer[i + 1];
    pairFrequencies[pair] ? pairFrequencies[pair]++ : (pairFrequencies[pair] = 1);
  }

  for (let step = 0; step < 40; step++) {
    let nextFrequencies = {};

    for (let pair in pairFrequencies) {
      // at each step, each pair "mutates" into a triplet,
      // or a set of two new pairs with the same frequency
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

  // reprocess our frequency map as counts of individual elements in each pair
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

  return maxElementCountDiff(elementCounts);
}
