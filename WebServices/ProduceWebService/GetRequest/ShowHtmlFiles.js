const express = require("express");
const path = require('path')

const app = express();
// Setup public directory path
// Crate folders and put html files in those folders
// Access these folders and files in the url
// Example : http://localhost:3000/home/home.html
const publicDir = path.join(__dirname,'../publicDir')

app.use(express.static(publicDir))

app.listen(3000,()=>{
    console.log("NodeJS REST API Running on port 3000");
})