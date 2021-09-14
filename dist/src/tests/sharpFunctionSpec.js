"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharpFunction_1 = __importDefault(require("../routes/api/sharpFunction"));
const fs_1 = __importDefault(require("fs"));
describe('This test suite tests the sharp function', () => {
    let height = 50;
    let width = 50;
    let file = `src/images/resizedfjord_h${height}_w${width}.jpg`;
    let imagepath = 'src/images/fjord.jpg';
    let resizedpath;
    it('should output a resized imagefile if it exists', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(fs_1.default.existsSync(file)).toBeFalse;
        yield sharpFunction_1.default(height, width, imagepath, file);
        expect(fs_1.default.existsSync(file)).toBeTrue;
        //delete the file after it was created for testing
        fs_1.default.rmSync(file);
    }));
});
