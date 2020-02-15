const express = require('express');

/* Init settings */
const app = express();
const port = 8081;

//Body Setup
// .....


//Endpoints Setup
//......

//Listen Express Setup
app.listen(
    port, 
    () => {console.log(`Server started on http://localhost:${port}/`)}
);
