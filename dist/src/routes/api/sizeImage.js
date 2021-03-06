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
const express_1 = __importDefault(require("express"));
const sharpFunction_1 = __importDefault(require("./sharpFunction"));
const fs = require('fs');
//route object called image
const imageroute = express_1.default.Router();
//It is going to be an async function with a promise to resize the imgage at the end of the process
imageroute.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //read url parameters
    const image = req.params.id;
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    const imagePath = `src/images/${image}.jpg`;
    const resized = `src/images/resized${image}_h${height}_w${width}.jpg`;
    //check the url parameters are int and the right filename
    if (height !== NaN && height > 0 && width !== NaN && width > 0) {
        if (image && fs.existsSync(imagePath)) {
            const exists = fs.existsSync(resized);
            if (!exists) {
                try {
                    sharpFunction_1.default(height, width, imagePath, resized);
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    fs.createReadStream(resized).pipe(res);
                }
                catch (e) {
                    res.send(e);
                }
            }
            else {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                fs.createReadStream(resized).pipe(res);
            }
        }
        else {
            res.send('image was not found in the files');
        }
    }
    else {
        res.send('Either the height or width are null or not greater than 0');
    }
}));
exports.default = imageroute;
