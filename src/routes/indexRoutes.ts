//create routes object and add express
import express from 'express';
//import the additional routes that I am going to use
import imageroute from './api/sizeImage';

const routes = express.Router();

routes.get('/images', (req,res) => {
    res.send('Main api route')
})

routes.use('/images/resize', imageroute);


export default routes;

