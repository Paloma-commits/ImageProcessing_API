"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
function resize(height, width, image, outputFilename) {
    sharp(image)
        .resize(height, width)
        .toFile(`src/images/resized${image}_h${height}_w${width}.jpg`);
    return outputFilename;
}
exports.default = resize;
