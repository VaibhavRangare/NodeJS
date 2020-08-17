const express = require('express')
const studentRouter = require('./routes/StudentRouters')
const path = require('path')
const publicDir = path.join(__dirname,'./public')
const hbs = require('hbs')
const app = express()

app.set('view engine','hbs')
app.set('views',publicDir)
app.use(express.static(publicDir))
app.use(express.json())
app.use(studentRouter)

app.listen(3000,()=>{
    console.log("Running on port 3000")
})