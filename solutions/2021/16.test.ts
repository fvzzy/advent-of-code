import { problem2021_16_1, problem2021_16_2, hexToPacket, interpretPacket, title } from "./16";

describe(`2021 day 16: ${title}`, () => {
  describe("#hexToPacket", () => {
    test("returns the correct binary string", () => {
      expect(hexToPacket("D2FE28")).toBe("110100101111111000101000");
      expect(hexToPacket("38006F45291200")).toBe("00111000000000000110111101000101001010010001001000000000");
      expect(hexToPacket("EE00D40C823060")).toBe("11101110000000001101010000001100100000100011000001100000");
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
      expect(interpretPacket("00111000000000000110111101000101001010010001001000000000")).toStrictEqual({
        version: 1,
        typeId: 6,
        subpackets: [
          { version: 6, typeId: 4, value: 10, length: 11 },
          { version: 2, typeId: 4, value: 20, length: 16 },
        ],
        length: 49,
      });
      expect(interpretPacket("11101110000000001101010000001100100000100011000001100000")).toStrictEqual({
        version: 7,
        typeId: 3,
        subpackets: [
          { version: 2, typeId: 4, value: 1, length: 11 },
          { version: 4, typeId: 4, value: 2, length: 11 },
          { version: 1, typeId: 4, value: 3, length: 11 },
        ],
        length: 51,
      });
    });
  });

  describe("example inputs", () => {
    test("part 1 solution works", () => {
      expect(problem2021_16_1(["8A004A801A8002F478"])).toBe(16);
      expect(problem2021_16_1(["620080001611562C8802118E34"])).toBe(12);
      expect(problem2021_16_1(["C0015000016115A2E0802F182340"])).toBe(23);
      expect(problem2021_16_1(["A0016C880162017C3686B18A3D4780"])).toBe(31);
    });

    test("part 2 solution works", () => {
      expect(problem2021_16_2(["C200B40A82"])).toBe(3);
      expect(problem2021_16_2(["04005AC33890"])).toBe(54);
      expect(problem2021_16_2(["880086C3E88112"])).toBe(7);
      expect(problem2021_16_2(["CE00C43D881120"])).toBe(9);
      expect(problem2021_16_2(["D8005AC2A8F0"])).toBe(1);
      expect(problem2021_16_2(["F600BC2D8F"])).toBe(0);
      expect(problem2021_16_2(["9C005AC2F8F0"])).toBe(0);
      expect(problem2021_16_2(["9C0141080250320F1802104A08"])).toBe(1);
    });
  });
});
