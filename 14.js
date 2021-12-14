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
    let pairs = [];
    for (let i = 0; i + 1 < template.length; i++) {
      pairs.push(template[i] + template[i + 1]);
    }

    let newPairs = [];
    for (let pair of pairs) {
      // disregard the last element, as it overlaps with the first element in the next new pair
      newPairs.push(pair[0] + rules[pair]);
    }
    // append on the last element
    template = newPairs.join("") + template[template.length - 1];
  }

  let elementCounts = {};
  for (let i = 0; i < template.length; i++) {
    elementCounts[template[i]]
      ? elementCounts[template[i]]++
      : (elementCounts[template[i]] = 1);
  }

  let minFrequency = Infinity;
  let maxFrequency = -Infinity;
  for (let element in elementCounts) {
    minFrequency = Math.min(minFrequency, elementCounts[element]);
    maxFrequency = Math.max(maxFrequency, elementCounts[element]);
  }

  return maxFrequency - minFrequency;
}

export function problem14_2(input) {}
