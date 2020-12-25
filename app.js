const express = require('express')
const os = require('os')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    console.log(os.userInfo().username)
})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})