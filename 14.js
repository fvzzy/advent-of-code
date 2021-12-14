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
  for (let element in counts) {
    minFrequency = Math.min(minFrequency, counts[element]);
    maxFrequency = Math.max(maxFrequency, counts[element]);
  }

  return maxFrequency - minFrequency;
}

export function problem14_2(input) {}
