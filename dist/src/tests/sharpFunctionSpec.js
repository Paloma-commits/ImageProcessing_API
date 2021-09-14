"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharpFunction_1 = __importDefault(require("../routes/api/sharpFunction"));
describe('This test suite tests the sharp function', () => {
    let height;
    let width;
    let imagefile;
    it('should output a resized imagefile', () => {
        expect(sharpFunction_1.default(200, 200, 'src/images/fjord.jpg', `src/images/resizedfjord_h${height}_w${width}.jpg`)).toBeTruthy;
    });
});
