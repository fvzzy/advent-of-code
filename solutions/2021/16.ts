// https://adventofcode.com/2021/day/16
export const title2021_16 = "packet decoder";

export const hexToPacket = (hexString) => {
  const map = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };

  let packet = "";
  for (let c = 0; c < hexString.length; c++) packet += map[hexString[c]];
  return packet;
};

export const interpretPacket = (packet, cursor = 0) => {
  const readBits = (count) => {
    cursor += count;
    return bits.slice(cursor - count, cursor);
  };

  const readBitsAndParse = (count) => parseInt(readBits(count).join(""), 2);

  let initialCursor = cursor;
  let bits = packet.split("");
  const version = readBitsAndParse(3);
  const typeId = readBitsAndParse(3);

  if (typeId === 4) {
    // literal value
    let subpacket = "";
    let keepReading = true;
    while (bits[cursor] !== "0" || keepReading) {
      if (bits[cursor] === "0") keepReading = false;
      subpacket += readBits(5).slice(1).join("");
      if (!keepReading) break;
    }
    const literalValue = parseInt(subpacket, 2);
    return {
      version,
      typeId,
      value: literalValue,
      length: cursor - initialCursor,
    };
  } else {
    // operator
    let lengthTypeId = readBits(1)[0];
    let subpackets = [];

    if (lengthTypeId === "0") {
      // next 15 bits are a number that represents the total length in bits
      // of the sub-packets contained by this packet
      let subpacketsBits = readBitsAndParse(15);
      while (subpacketsBits > 0) {
        const subpacket = interpretPacket(packet, cursor);
        subpackets.push(subpacket);
        cursor += subpacket.length;
        subpacketsBits -= subpacket.length;
      }
    } else if (lengthTypeId === "1") {
      // next 11 bits are a number that represents the number of sub-packets
      // immediately contained by this packet
      let totalSubpackets = readBitsAndParse(11);
      while (subpackets.length < totalSubpackets) {
        const subpacket = interpretPacket(packet, cursor);
        subpackets.push(subpacket);
        cursor += subpacket.length;
      }
    }

    return {
      version,
      typeId,
      subpackets,
      length: cursor - initialCursor,
    };
  }
};

const decodeTransmission = (hexString) => {
  const packet = hexToPacket(hexString);
  return interpretPacket(packet);
};

const evaluatePacket = (packet) => {
  const { typeId, subpackets: sp, value } = packet;
  switch (typeId) {
    case 4:
      return value;
    case 0:
      return sp.reduce((sum, p) => evaluatePacket(p) + sum, 0);
    case 1:
      return sp.reduce((product, p) => evaluatePacket(p) * product, 1);
    case 2:
      return sp.reduce((min, p) => Math.min(evaluatePacket(p), min), Infinity);
    case 3:
      return sp.reduce((max, p) => Math.max(evaluatePacket(p), max), -Infinity);
    case 5:
      return evaluatePacket(sp[0]) > evaluatePacket(sp[1]) ? 1 : 0;
    case 6:
      return evaluatePacket(sp[0]) < evaluatePacket(sp[1]) ? 1 : 0;
    case 7:
      return evaluatePacket(sp[0]) === evaluatePacket(sp[1]) ? 1 : 0;
  }
};

export function problem2021_16_1(input: string[]) {
  const sum = (arr) => arr.reduce((sum, curr) => curr + sum, 0);
  const sumProperty = (prop) => (packet) =>
    packet[prop] + (packet.subpackets ? sum(packet.subpackets.map(sumProperty(prop))) : 0);

  const transmission = decodeTransmission(input[0]);
  return sumProperty("version")(transmission);
}

export function problem2021_16_2(input: string[]) {
  const transmission = decodeTransmission(input[0]);
  return evaluatePacket(transmission);
}
