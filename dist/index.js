"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//setting up the server
const express_1 = __importDefault(require("express"));
//create the object name to the top-level Express function
const app = express_1.default();
//Deffault port set to 3000
const port = 3000;
//get the server to listen in the right port
app.listen(port, () => {
    console.log(`listening on port ${port};`);
});
//define a route handler for the default home page
app.get('/home', (req, res) => {
    res.send('server working');
});
//import routes the routes folder
const indexRoutes_1 = __importDefault(require("./src/routes/indexRoutes"));
app.use('', indexRoutes_1.default);
exports.default = app;
