
const express = require('express');

const {router} = require('./todoRoutes');



// create server
const app = express();

// enable sending json on the body.
app.use(express.json());

app.use('/', router);


//initialize the server
const port = 5000;
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});














