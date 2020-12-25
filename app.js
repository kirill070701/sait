const express = require('express')
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    dateRequire.write()
    console.log("-------------------------")
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})