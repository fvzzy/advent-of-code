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

const stripBitsAndParseInt = (bits, count) =>
  parseInt(bits.splice(0, count).join(""), 2);

const bitsToLiteralValue = (bits) => {
  while (bits.length % 5 !== 0) bits.pop();
  let loops = bits.length / 5;
  let valueBinaryParts = [];
  while (loops--) {
    valueBinaryParts.push(bits.splice(0, 5));
  }
  const literalValueBinary = valueBinaryParts
    .map((bits) => bits.slice(1).join(""))
    .join("");

  return parseInt(literalValueBinary, 2);
};

const parseOperatorPacket = (bits) => {
  let lengthTypeId = bits.splice(0, 1)[0];
  let subpackets = [];
  if (lengthTypeId === "0") {
    const subpacketsLength = stripBitsAndParseInt(bits, 15);
    let savedBits = 0;
    // split subpackets, starting at 6 to account for the packet header
    let bit = 6;
    while (savedBits < subpacketsLength) {
      if (bits[(bit += 5)] === "1") continue;
      let subpacket = bits.splice(0, bit).join("");
      subpackets.push(subpacket);
      savedBits += subpacket.length;
    }
  } else if (lengthTypeId === "1") {
    let numberSubpackets = stripBitsAndParseInt(bits, 11);
    for (let i = 0; i < numberSubpackets; i++) {
      subpackets.push(bits.splice(0, 11).join(""));
    }
  }
  return subpackets;
};

const stripVersionAndTypeId = (bits) => {
  let version = parseInt(bits.splice(0, 3).join(""), 2);
  let typeId = parseInt(bits.splice(0, 3).join(""), 2);
  return { version, typeId };
};

export const interpretPacket = (packet, result = []) => {
  let bits = packet.split("");
  let { version, typeId } = stripVersionAndTypeId(bits);

  if (typeId === 4) {
    // literal
    result.push({ version, typeId, value: bitsToLiteralValue(bits) });
  } else {
    // operator packet
    let subpackets = parseOperatorPacket(bits);
    for (let subpacket of subpackets) {
      if (!result.packets) result.packets = [];
      result = {
        version,
        typeId,
        packets: [...result.packets, ...interpretPacket(subpacket)],
      };
    }
  }

  return result;
};

export function problem16_1(input) {}

export function problem16_2(input) {}
