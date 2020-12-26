const express = require('express')
const fs = require("fs");
const Emitter = require("events")
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.end("Hello from Express!");
    res.end(dateRequire.user + "\n" + dateRequire.date)
    res.end(dateRequire.writeDate)
    console.log("--------------") 
    let emitter = new Emitter()
    let evetName = "greet"

    emitter.on(evetName, ()=>{
        console.log("Hello")
    })
    
    emitter.on("greet", (data)=>{
        console.log('world!!!', data)
    })


    emitter.emit(evetName, "hihihi");

    console.log("END")
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})