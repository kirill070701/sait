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

    function display(data, callback){
 
        // с помощью случайного числа определяем ошибку
        var randInt = Math.random() * (10 - 1) + 1;
        var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
         
        setTimeout(function(){
            callback(err, data);
        }, 0);
    }
     
    console.log("Начало работы программы");
     
    display("Обработка данных...", function (err, data){
     
        if(err) throw err;
        console.log(data);
    });
     
    console.log("Завершение работы программы");

})

app.listen(port, ()=>{
    console.log(`port ${port}`)
})