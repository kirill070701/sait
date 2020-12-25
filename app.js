const express = require('express')
const os = require('os')
const greeting = require('./greeting')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    let username = os.userInfo().username;
    console.log(username)
    console.log(`Дата запроса ${greeting.date}`)
    console.log(greeting.getMessage(username))
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})