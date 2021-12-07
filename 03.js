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

export function problem3_2(input) {}
