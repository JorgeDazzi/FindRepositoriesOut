const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/* Init settings */
const app = express();
const port = 8081;

//Body Setup
app.use(bodyParser.json());
app.use(cors());


//Endpoints Setup
//......

//Listen Express Setup
app.listen(
    port, 
    () => {console.log(`Server started on http://localhost:${port}/`)}
);
