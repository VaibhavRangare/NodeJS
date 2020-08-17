const express = require("express");
const path = require('path')
const hbs = require('hbs')

const app = express();

const publicDir = path.join(__dirname,'../publicDir')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDir))
//app.get('/', (req,res)=> res.send('Hello NodeJS!!!'));

console.log("__dirname:"+__dirname)
app.get('', (req,res)=> res.render('index',{name:'Vaibhav'}));

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname,'../templates/views/test.html'),{name:'abcd'});
   
});

app.get('*', (req,res)=> res.render('404'));



app.listen(3000,()=>{
   console.log("NodeJS REST API Running on port 3000");
})