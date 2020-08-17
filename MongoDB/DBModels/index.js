const Student = require('./Student')
const Course = require('./Course')
require('./DBConnector')
const mongoose = require('mongoose')

const vaibhav = new Student({
    email:'vaibhav@gmail.com',
    password:'password'
})

vaibhav.save().then(()=>{console.log(vaibhav)}).catch((error)=> console.log(error))

const nodejs = new Course({
    name:'Node.js',
    department:'CS'
})

nodejs.save().then(()=>{console.log(nodejs)}).catch((error)=> console.log(error))

