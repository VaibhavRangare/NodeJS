const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');
require('../db/DBConnector')
const studentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }
    ]
})
studentSchema.methods.getToken = async function () {
    const student = this
    const token = jwt.sign({ _id: student._id.toString() }, 'mySignature')
    student.tokens = student.tokens.concat({ token: token })
    try{
        await student.save()
        return token
    }
    catch(e){
        console.log(e)
    }
    
}
studentSchema.statics.findByCredentials = async function (email, password) {
    const student = await Student.findOne({ email })
    if (student === null) {
        throw new Error('Unabe to find student')
    }
    const stud = new Student(student)
    const match = await bcrypt.compare(password, stud.password)
    if (!match) {
        throw new Error('Unabe to find')
    }
    return stud
}
const Student = mongoose.model('Student', studentSchema)

module.exports = Student
