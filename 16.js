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

export const interpretPacket = (packet) => {
  let bits = packet.split("");
  let version = parseInt(bits.splice(0, 3).join(""), 2);
  let typeId = parseInt(bits.splice(0, 3).join(""), 2);

  if (typeId === 4) {
    return bitsToLiteralValue(bits);
  }
};

export function problem16_1(input) {}

export function problem16_2(input) {}
