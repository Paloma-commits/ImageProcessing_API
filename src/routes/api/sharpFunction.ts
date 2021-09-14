const sharp = require('sharp');

function resize(
  height: number,
  width: number,
  image: string,
  outputFilename: string
) {
  sharp(image)
    .resize(height, width)
    .toFile(`src/images/resized${image}_h${height}_w${width}.jpg`);
  return outputFilename;
}

export default resize;
