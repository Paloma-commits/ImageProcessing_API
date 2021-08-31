"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//create routes object and add express
const express_1 = __importDefault(require("express"));
//import the additional routes that I am going to use
const sizeImage_1 = __importDefault(require("./api/sizeImage"));
const routes = express_1.default.Router();
routes.get('/images', (req, res) => {
    res.send('Main api route');
});
routes.use('/images/resize', sizeImage_1.default);
exports.default = routes;
