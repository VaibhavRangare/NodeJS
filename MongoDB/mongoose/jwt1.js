const jwt = require('jsonwebtoken')

const jwt1 = jwt.sign({_id:'abcd123',email:'abc@gmail.com'},'abcd',{expiresIn:'7 days'})
console.log(jwt1)

const veri = jwt.verify(jwt1,'abcd')
console.log(veri)