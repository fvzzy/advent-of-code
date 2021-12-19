import {
  problem16_1,
  problem16_2,
  hexToPacket,
  interpretPacket,
  day,
  title,
} from "./16.js";

describe(`day ${day}: ${title}`, () => {
  describe("#hexToPacket", () => {
    test("returns the correct binary string", () => {
      expect(hexToPacket("D2FE28")).toBe("110100101111111000101000");
      expect(hexToPacket("38006F45291200")).toBe(
        "00111000000000000110111101000101001010010001001000000000"
      );
      expect(hexToPacket("EE00D40C823060")).toBe(
        "11101110000000001101010000001100100000100011000001100000"
      );
    });
  });

  describe("#intepretPacket", () => {
    test("returns the parsed packet and nested packets", () => {
      expect(interpretPacket("110100101111111000101000")).toStrictEqual({
        version: 6,
        typeId: 4,
        value: 2021,
        length: 21,
      });
      expect(
        interpretPacket(
          "00111000000000000110111101000101001010010001001000000000"
        )
      ).toStrictEqual({
        version: 1,
        typeId: 6,
        subpackets: [
          { version: 6, typeId: 4, value: 10, length: 11 },
          { version: 2, typeId: 4, value: 20, length: 16 },
        ],
      });
    });
  });

  describe("example inputs", () => {
    const exampleInput1 = "8A004A801A8002F478";
    const exampleInput2 = "620080001611562C8802118E34";
    const exampleInput3 = "C0015000016115A2E0802F182340";
    const exampleInput4 = "A0016C880162017C3686B18A3D4780";

    test("part 1 solution works", () => {
      // expect(problem16_1(exampleInput1)).toBe(16);
      // expect(problem16_1(exampleInput2)).toBe(12);
      // expect(problem16_1(exampleInput3)).toBe(23);
      // expect(problem16_1(exampleInput4)).toBe(31);
    });

    test("part 2 solution works", () => {
      // expect(problem16_2(exampleInput)).toBe(undefined);
    });
  });
});
