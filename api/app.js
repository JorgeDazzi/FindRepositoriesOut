const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const repositories = require('./service/endpoints/Repositories');
const bookmark = require('./service/endpoints/Bookmarks');

/* Init settings */
const app = express();
const port = 8081;

//Body Setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());


//Endpoints Setup
app.use('/repo', repositories);
app.use('/bookmark', bookmark);

//Listen Express Setup
app.listen(
    port, 
    () => {console.log(`Server started on http://localhost:${port}/`)}
);
