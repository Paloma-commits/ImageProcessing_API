//create routes object and add express
import express, { Request, Response } from 'express';
//import the additional routes that I am going to use
import imageroute from './api/sizeImage';

const routes = express.Router();

routes.get('/images', (req: Request, res: Response) => {
  res.send('Main api route');
});

routes.use('/images/resize', imageroute);

export default routes;
