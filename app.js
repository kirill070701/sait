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
    let ws = fs.createWriteStream("helo.txt")
    let ls = fs.createWriteStream("say.txt")
    ws.write("Привет")
    ws.write("Привет мир")
    ws.end("Завершение")

    

    let rs = fs.createReadStream("helo.txt", "utf8")
    rs.on("data", function(chunk){ 
        console.log(chunk)
    })
    rs.pipe(ls)
    let lss = fs.createReadStream("say.txt", "utf8")
    lss.on("data", function(chunk){ 
        console.log(chunk)
    })
    console.log("END")
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})