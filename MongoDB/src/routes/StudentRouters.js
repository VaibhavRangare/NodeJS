require('../db/DBConnector')
const Student = require('../model/Student')
const express = require('express')
const bcrypt = require('bcryptjs');
const studentmw = require('../mw/studentmw')
var bodyParser = require('body-parser')

const router = new express.Router()

const urlencoded = bodyParser.urlencoded({ extended: false })

router.get('/form',(req,resp)=>{
    resp.render('form')
})

router.get('',(req,resp)=>{
    resp.render('index')
})
router.post('',(req,resp)=>{
    resp.render('index')
})

router.post('/login',urlencoded,async (req,resp)=>{
    try{
        const student = await Student.findByCredentials(req.body.email,req.body.password)
        if(!student){
            return resp.status(404).send("error")
        }
        resp.send(student)
    }
    catch(e){
        resp.status(404).send("error")
    }
})

router.post('/logout',studentmw, async (req,resp)=>{
    console.log("req.body:"+JSON.stringify(req.body))
    req.student.tokens= []
    req.student.save() 
    resp.send(req.student)
})

router.post('/Student',async (req,resp)=>{
    const stud = new Student(req.body)
    stud.password = await bcrypt.hash(stud.password,8)
    //await stud.save()
    const token = await stud.getToken()
    resp.send({stud,token})
})
router.get('/Students',async (req,resp)=>{
    try{
        const users = await Student.find({})
        if(!users){
            return resp.status(404).send("error")
        }
        resp.send(users)
    }
    catch(e){
        resp.status(404).send("error")
    }
    
})

router.get('/Students/:id',async (req,resp)=>{
    const _id = req.params.id
    //Student.findById(_id).then((user)=>{resp.send(user)}).catch((e)=>console.log(e))
    try{
        const user = await Student.findById(_id)
        console.log(user)
        resp.send(user)
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router