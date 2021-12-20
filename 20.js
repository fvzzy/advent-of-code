export const day = 20;
export const title = "trench map";

const processInput = (input) => {
  const algorithm = input.shift();
  const image = input.filter(Boolean).map((line) => line.split(""));
  return { algorithm, image };
};

const pixelValue = (x, y, image, algorithm) => {
  const adjacentPixels = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  let binary = "";
  for (let [adjX, adjY] of adjacentPixels) {
    binary += image[y + adjY][x + adjX] === "#" ? 1 : 0;
  }

  return algorithm[parseInt(binary, 2)];
};

const expand = (image) => {
  const newWidth = image.length + 4;
  const newHeight = image[0].length + 4;
  let result = Array(newHeight)
    .fill()
    .map(() => Array(newWidth).fill("."));

  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[0].length; x++) {
      result[y + 2][x + 2] = image[y][x];
    }
  }
  return result;
};

const enhance = (image, algorithm) => {
  let enhancedImage = expand(image);
  let resultPixels = {};

  for (let y = 1; y < enhancedImage.length - 1; y++) {
    for (let x = 1; x < enhancedImage[0].length - 1; x++) {
      resultPixels[`${x}-${y}`] = pixelValue(x, y, enhancedImage, algorithm);
    }
  }

  for (let pixel in resultPixels) {
    const [x, y] = pixel.split("-");
    enhancedImage[y][x] = resultPixels[pixel];
  }

  return enhancedImage;
};

const countLit = (image) => {
  let count = 0;
  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[0].length; x++) {
      if (image[y][x] === "#") count++;
    }
  }
  return count;
};

export function problem20_1(input) {
  let { algorithm, image } = processInput(input);
  let enhancements = 2;
  while (enhancements--) image = enhance(image, algorithm);
  return countLit(image);
}

export function problem20_2(input) {}
