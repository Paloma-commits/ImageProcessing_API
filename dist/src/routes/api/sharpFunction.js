"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function resize(height, width, imagepath, resizedpath) {
    sharp_1.default(imagepath)
        .resize(height, width)
        .toFile(resizedpath);
}
exports.default = resize;
