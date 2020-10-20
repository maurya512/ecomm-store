// import modules 
import express from 'express';
import data from './data';

const PORT = 5000;
// define the express function and store it as app
const app = express();

// handler function req, res
app.get('/api/products', (req,res) => {
    // get products info from the data.js file
    res.send(data.products);
})

app.listen(PORT, () => {console.log(`Server started at ${PORT}`)});

