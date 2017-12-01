var express = require('express')
var app = express()

// Build Your Route Here
app.get(`/`, function(req, resp){
    resp.render({welcomePhrase: "Hello, World!"})

})


module.exports = app
