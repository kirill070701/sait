const express = require('express')
const dateRequire = require('./dateRequire')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.end("Hello from Express!");
    res.end(dateRequire.user)
    res.end(dateRequire.writeDate)
    console.log("--------------")

    function displaySync(callback){
        callback();
    }
     
    console.log("Начало работы программы");
     
    setTimeout(function(){
             
            console.log("timeout 500");
    }, 500);
     
    setTimeout(function(){
             
            console.log("timeout 100");
    }, 100);
     
    displaySync(function(){console.log("without timeout")});
    console.log("Завершение работы программы");

        

})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})