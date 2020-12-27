const express = require('express')
const fs = require("fs");
const Emitter = require("events")
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})