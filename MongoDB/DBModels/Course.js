const mongoose = require('mongoose')

const Course = mongoose.model('Course',{
    name: {
        type:String,
        required:true,
        unique:true
    },
    department : {
        type:String,
        required:true
    }
})

module.exports = Course
