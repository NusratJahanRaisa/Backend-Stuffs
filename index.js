// express app creation
const express = require("express");
// creating an express app
const app = express()
// express app connection setup with local server 5000

app.listen(5000, ()=>{
    console.log("5000 server is working");
})


