const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const repositories = require('./endpoints/Repositories');

/* Init settings */
const app = express();
const port = 8081;

//Body Setup
app.use(bodyParser.json());
app.use(cors());


//Endpoints Setup
app.use('/repo', repositories);

//Listen Express Setup
app.listen(
    port, 
    () => {console.log(`Server started on http://localhost:${port}/`)}
);
