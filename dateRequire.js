const os = require('os')
const greeting = require('./greeting')
let username = os.userInfo().username;

module.exports.time = username + `\nДата запроса ${greeting.date}` + "\n" + greeting.getMessage(username)
    
    //console.log(username)
    //console.log(`Дата запроса ${greeting.date}`)
    //console.log(greeting.getMessage(username))
    //return username + `\nДата запроса ${greeting.date}` + "\n" + greeting.getMessage(username)
