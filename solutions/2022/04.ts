/* 2022 day 4: "camp cleanup" */

export function problem2022_4_1(input: string[]) {
  let pairs = 0;
  for (let assignments of input) {
    const [sectionsRange1, sectionsRange2] = assignments.split(",");
    const [start1, end1] = sectionsRange1.split("-").map(Number);
    const [start2, end2] = sectionsRange2.split("-").map(Number);
    if ((start1 >= start2 && end1 <= end2) || (start2 >= start1 && end2 <= end1)) pairs++;
  }
  return pairs;
}

export function problem2022_4_2(input: string[]) {}
