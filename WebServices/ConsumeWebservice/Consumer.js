const request = require('request')
const url = 'https://gorest.co.in/public-api/posts/123/comments'
const username = "john"
const password = "1234"
const auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64")

// Request without headers
/*
request({url:url, json:true},(error,response)=>{
    console.log(username)
    console.log(error)
    console.log(response.body)
})
*/

// Request with headers
request({
    url: url,
    headers: {
        "Authorization": auth
    },
    json: true
}, (error, response) => {
    if (error) {
        console.log("Unable to connect to the server")
    }
    else {
        //console.log(response.body.data)
        response.body.data.forEach((item) => console.log("Post Id: " + item.post_id))
    }
})

