import express from 'express';
import { WriteStream } from 'fs';

//import {promises as fsPromises} from fs;
const fs = require('fs');

//route object called image
const imageroute = express.Router();
const sharp = require('sharp');
const path = require('path');


//It is going to be an async function with a promise to resize the imgage at the end of the process

imageroute.get('/:id', async (req, res) => {

    //read url parameters
    let image = req.params.id;
    let height = Number(req.query.height);
    let width = Number(req.query.width);

    let imagePath = `src/images/${image}.jpg`;
    let resized = `src/images/resized${image}_h${height}_w${width}.jpg`;
    //check the url parameters are int and the right filename

    if (height !== NaN && height > 0 && width !== NaN && width > 0) {
        if (image && fs.existsSync(imagePath)) {
            var exists = fs.existsSync(resized);

            if(!exists) {

                try{
                    fs.readFile(imagePath, async function (err: any, data: any) {
                        await sharp(data)
                            .resize(height, width)
                            .toFile(resized);
                            res.writeHead(200, { 'Content-Type': 'image/jpg' });
                            fs.createReadStream(resized).pipe(res);
                    });

                }
                catch(e){
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
});

export default imageroute;
