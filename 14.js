export const day = 14;
export const title = "extended polymerization";

export function problem14_1(input) {
  let template = input.shift();
  let rules = {};
  for (let rule of input) {
    const [pair, insert] = rule.split(" -> ");
    rules[pair] = insert;
  }

  let steps = 10;
  while (steps--) {
    let nextTemplate = "";
    for (let i = 0; i < template.length - 1; i++) {
      nextTemplate += template[i] + rules[`${template[i]}${template[i + 1]}`];
    }
    template = nextTemplate + template[template.length - 1];
  }

  let counts = {};
  for (let i = 0; i < template.length; i++) {
    counts[template[i]] ? counts[template[i]]++ : (counts[template[i]] = 1);
  }

  let minFrequency = Infinity;
  let maxFrequency = -Infinity;
  for (let element in counts) {
    minFrequency = Math.min(minFrequency, counts[element]);
    maxFrequency = Math.max(maxFrequency, counts[element]);
  }

  return maxFrequency - minFrequency;
}

export function problem14_2(input) {}
