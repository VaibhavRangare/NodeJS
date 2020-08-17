const mongoose = require('mongoose')

const Student = mongoose.model('Student',{
    email: {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
})

module.exports = Student
