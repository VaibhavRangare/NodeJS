const express = require("express");
const gorest = require('../../ConsumeWebservice/gorest')

const app = express();
app.get('/posts', function (req, res) {
    gorest(req.query.id, (error, data) => {
        if (error) {
            res.send({
                error: error
            })
        }
        else {
            res.send({
                id: req.query.id,
                name: data.name,
                post_id: data.post_id
            })
        }
    })
});

app.listen(3000, () => {
    console.log("NodeJS REST API Running on port 3000");
})