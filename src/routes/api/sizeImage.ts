import express, { Request, Response } from 'express';
import resize from './sharpFunction';
const fs = require('fs');

//route object called image
const imageroute = express.Router();

//It is going to be an async function with a promise to resize the imgage at the end of the process

imageroute.get('/:id', async (req: Request, res: Response) => {
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
          resize(height, width, imagePath, resized);
          res.writeHead(200, { 'Content-Type': 'image/jpg' });
          fs.createReadStream(resized).pipe(res);
        } catch (e) {
          res.send(e);
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        fs.createReadStream(resized).pipe(res);
      }
    } else {
      res.send('image was not found in the files');
    }
  } else {
    res.send('Either the height or width are null or not greater than 0');
  }
});

export default imageroute;
