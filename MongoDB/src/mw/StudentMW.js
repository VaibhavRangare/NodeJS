const jwt = require('jsonwebtoken')
const Student = require('../model/Student')
const mongoose = require('mongoose')
require('../db/DBConnector')
const studentmw = async (req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
  
    const token = req.headers.authorization.split(" ")[1];
    const decoded_token = jwt.verify(token,'mySignature')
    try{
        const student = await Student.findOne({'tokens.token':token})
        if(!student){
            return resp.status(404).send("error")
        }
        const stud = new Student(student)
        req.student = stud
    }
    catch(e){
        console.log("stud.error:"+e)
    }
    next()
}
module.exports = studentmw