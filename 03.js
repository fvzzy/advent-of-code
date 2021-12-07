/* 
  Day 3: Binary Diagnostic
  https://adventofcode.com/2021/day/3
*/

const binaryToInt = (binaryString) => parseInt(binaryString, 2);

export function problem3_1(input) {
  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < input[0].length; i++) {
    let zeroes = 0;
    let ones = 0;

    for (let value of input) {
      value[i] === "0" ? zeroes++ : ones++;
      if (zeroes > input.length / 2) {
        gammaRate += "0";
        epsilonRate += "1";
        break;
      } else if (ones > input.length / 2) {
        gammaRate += "1";
        epsilonRate += "0";
        break;
      }
    }
  }

  return binaryToInt(gammaRate) * binaryToInt(epsilonRate);
}

export function problem3_2(input) {
  let o2Candidates = input.slice();
  let co2Candidates = input.slice();

  let i = 0;
  let j = 0;

  while (i < input[0].length && o2Candidates.length > 1) {
    let zeroes = 0;
    let ones = 0;

    for (let value of o2Candidates) {
      value[i] === "0" ? zeroes++ : ones++;
      if (zeroes > o2Candidates.length / 2) {
        o2Candidates = o2Candidates.filter((c) => c[i] === "0");
        break;
      } else if (ones >= o2Candidates.length / 2) {
        o2Candidates = o2Candidates.filter((c) => c[i] === "1");
        break;
      }
    }

    i += 1;
  }

  while (j < input[0].length && co2Candidates.length > 1) {
    let zeroes = 0;
    let ones = 0;

    for (let value of co2Candidates) {
      value[j] === "0" ? zeroes++ : ones++;
      if (zeroes > co2Candidates.length / 2) {
        co2Candidates = co2Candidates.filter((c) => c[j] === "1");
        break;
      } else if (ones >= co2Candidates.length / 2) {
        co2Candidates = co2Candidates.filter((c) => c[j] === "0");
        break;
      }
    }

    j += 1;
  }

  return binaryToInt(o2Candidates[0]) * binaryToInt(co2Candidates[0]);
}
