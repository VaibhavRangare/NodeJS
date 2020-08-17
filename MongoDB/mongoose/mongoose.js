const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/College')

const Student = mongoose.model('Student',{
    email: String,
    password : String
})

const me = new Student({
    email:'vaibhav@gmail.com',
    password:'password'
})
me.save().then(()=>{
    console.log(me)
    
}).catch((error)=> console.log(error))