const express = require('express')
const fs = require("fs");
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.end("Hello from Express!");
    res.end(dateRequire.user)
    res.end(dateRequire.writeDate)
    console.log("--------------") 
    fs.truncate("helo.txt",(error)=>{
        console.log("Ассинхронное удаление")
    })

    fs.readFile("helo.txt", "utf8", (error,data)=>{
        console.log("Ассинхронное чтение 1")
        console.log(data)
    })

    fs.appendFile("helo.txt", "HELLO", (error)=>{
        console.log("Ассинхронная запись")
    })
    
    fs.readFile("helo.txt", "utf8", (error,data)=>{
        console.log("Ассинхронное чтение2")
        console.log(data)
    })
    
    console.log("END")
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})