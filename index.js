const express = require('express')
const request = require('request')
const app = express()

app.use('/', (req, res) =>{
    const url = 'https://scholar.google.com/' + req.url
    req.pipe(request(url)).pipe(res)
})

app.listen(process.env.PORT || 3000)
