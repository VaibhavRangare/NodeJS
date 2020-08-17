const request = require('request')
const url = 'https://gorest.co.in/public-api/posts/'
const username = "john"
const password = "1234"
const auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64")

const req1 = {
    url: url,
    headers: {
        "Authorization": auth
    },
    json: true
}

const gorest = (address,callabck)=>{
    req1.url = req1.url+address +"/comments"
    request(req1,(error,response)=>{
        if (error) {
            callabck("Unable to connect to the server",undefined)
        }
        else {
            callabck(undefined,{
                name:response.body.data[0].name,
                post_id:response.body.data[0].post_id
            })

        }
    })
}

gorest('2',(error,data)=>{
    console.log(error)
    console.log(data)
})