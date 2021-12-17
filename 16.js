export const day = 16;
export const title = "packet decoder";

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
    };
  } else {
    // operator
    let lengthTypeId = readBits(1)[0];

    if (lengthTypeId === "0") {
      // next 15 bits are a number that represents the total length in bits
      // of the sub-packets contained by this packet
      let subpacketsLength = readBitsAndParse(15);
      let subpackets = readBits(subpacketsLength).join("");
      while (subpacketsLength > 0) {
        const subpacket = interpretPacket(subpackets);
        subpacketsLength -= subpacket.length;
      }
    } else if (lengthTypeId === "1") {
      // next 11 bits are a number that represents the number of sub-packets
      // immediately contained by this packet
      // let totalSubpackets = readBitsAndParse(11);
      // let bit = 6;
      // while (subpackets.length < totalSubpackets) {
      //   if (bits[bit] === "1") {
      //     bit += 5;
      //   } else {
      //     let subpacket = bits.splice(0, bit + 5).join("");
      //     subpackets.push(subpacket);
      //     bit = 6;
      //   }
      // }
    }
  }

  return result;
};

const decodeTransmission = (hexString) => {
  const packet = hexToPacket(hexString);
  return interpretPacket(packet);
};

export function problem16_1(input) {
  return decodeTransmission(input);
}

export function problem16_2(input) {}
