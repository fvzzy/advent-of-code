export const day = 8;
export const title = "seven segment search";

export function problem2021_8_1(input) {
  // get count with single pass over each input char
  let count = 0;
  for (let line = 0; line < input.length; line++) {
    let cursor = input[line].length - 1;
    while (input[line][cursor] !== "|") {
      let digitLength = 0;
      while (input[line][cursor--] !== " ") digitLength++;
      if ([2, 3, 4, 7].includes(digitLength)) count++;
      digitLength = 0;
    }
  }
  return count;
}

const charDifference = (str1, str2) => [...str1].filter((x) => !str2.includes(x)).length;

const isAnagram = (str1, str2) => str1.length === str2.length && charDifference(str1, str2) === 0;

const extract = (arr, matchFn) => arr.splice(arr.findIndex(matchFn), 1)[0];

const digitsByPattern = (patternsStr) => {
  let patterns = patternsStr.split(" ");
  const digitsByPattern = [];

  // map 1, 4, 7, and 8 using their unique segment counts
  const uniqueSegmentCountDigits = { 1: 2, 4: 4, 7: 3, 8: 7 };
  for (let digit in uniqueSegmentCountDigits) {
    digitsByPattern[digit] = extract(patterns, (p) => p.length === uniqueSegmentCountDigits[digit]);
  }

  // map digits using a unique difference count between the segments in the desired
  // digit, and the number of segments in another known digits. e.g:
  // 9 has six segments, and two additional segments in addition to the segments in 4
  digitsByPattern[9] = extract(patterns, (p) => p.length === 6 && charDifference(p, digitsByPattern[4]) === 2);
  digitsByPattern[6] = extract(patterns, (p) => p.length === 6 && charDifference(p, digitsByPattern[1]) === 5);
  digitsByPattern[0] = extract(patterns, (p) => p.length === 6);
  digitsByPattern[3] = extract(patterns, (p) => charDifference(p, digitsByPattern[1]) === 3);
  digitsByPattern[5] = extract(patterns, (p) => charDifference(p, digitsByPattern[6]) === 0);
  digitsByPattern[2] = patterns[0];

  return digitsByPattern;
};

const decodeOutputValue = (outputValueStr, digitPatterns) => {
  const outputValues = outputValueStr.split(" ");
  const valueToDigit = (value) => digitPatterns.findIndex((p) => isAnagram(p, value));

  return Number(outputValues.map((v) => valueToDigit(v)).join(""));
};

export function problem2021_8_2(input) {
  let sumOutputValues = 0;
  for (let line of input) {
    const [signalPatternsStr, outputValueStr] = line.split(" | ");
    const digitPatterns = digitsByPattern(signalPatternsStr);
    const outputValue = decodeOutputValue(outputValueStr, digitPatterns);
    sumOutputValues += outputValue;
  }
  return sumOutputValues;
}
