//setting up the server
import express from "express";

//create the object name to the top-level Express function
const app = express();

//Deffault port set to 3000
const port = 3000;

//get the server to listen in the right port
app.listen(port, () => {
    console.log(`listening on port ${port};`);
});

//define a route handler for the default home page
app.get('/home', (req, res) => {
    res.send('server working');
})

//import routes the routes folder
import routes from './src/routes/indexRoutes';

app.use('', routes);

const myFunc = (num: number): number => {
    return num * num;
  };
  
export default myFunc;