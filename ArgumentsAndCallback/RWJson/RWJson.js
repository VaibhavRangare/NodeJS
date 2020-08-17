const fs = require('fs')
const { json } = require('express')
const data = fs.readFileSync('sample.json')
let json_string = data.toString()
console.log("json_string: " + typeof json_string)
const json_data = JSON.parse(json_string)
console.log("json_data: " + typeof json_data)
console.log(json_data)
json_data.Actor = "Achilles"
json_data.Movie = "Troy"
json_string = JSON.stringify(json_data)
fs.writeFileSync('sample.json', json_string)


