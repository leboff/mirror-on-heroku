const express = require('express')
const request = require('request')
const app = express()

if(process.env.haha == "NoCheckCertificate") {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}
   
app.use('/', (req, res) =>{
    const url = req.url
    req.pipe(request(url)).pipe(res)
})

app.listen(process.env.PORT || 3000)
