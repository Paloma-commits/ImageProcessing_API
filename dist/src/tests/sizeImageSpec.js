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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
const sizeImage_1 = __importDefault(require("../routes/api/sizeImage"));
var request = supertest_1.default(__1.default);
describe('Test the resizing of the image', () => {
    it('gets the resized image file', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request
            .get('/images/resize/fjord?height=200&width=200')
            .expect(200)
            .expect('Content-Type', 'image/jpg');
        done();
    }));
    it('test the image name on url is on file', () => {
        const image = 'fjord';
        const response = sizeImage_1.default.get('/:id', () => __awaiter(void 0, void 0, void 0, function* () {
            expect('/:id').toBe(image);
        }));
    });
    it('test for wrong width (null)', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images/resize/fjord?height=200&width=a');
        expect(response.text).toEqual('Either the height or width are null or not greater than 0');
        done();
    }));
    it('test for wrong height (null)', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images/resize/fjord?height=a&width=200');
        expect(response.text).toEqual('Either the height or width are null or not greater than 0');
        done();
    }));
    it('test for wrong width (< 0)', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images/resize/fjord?height=200&width=-8');
        expect(response.text).toEqual('Either the height or width are null or not greater than 0');
        done();
    }));
    it('test for wrong height (< 0)', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images/resize/fjord?height=-8&width=200');
        expect(response.text).toEqual('Either the height or width are null or not greater than 0');
        done();
    }));
});
