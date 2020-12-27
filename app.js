const express = require('express')
const fs = require("fs");
const Emitter = require("events")
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views'))

app.get('/app', (req, res)=>{
    console.log("get")
    let id          = req.query.id
    let name        = req.query.name
    res.send(`name- ${name}\nid- ${id}`)
})
   


app.listen(port, ()=>{
    console.log(`port ${port}`)
})