const mysql = require('mysql');
const mysqlConnetion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ci11159753',
    database:'company'
}); 

mysqlConnetion.connect(function(err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Bd is connected');
    }
});

module.exports = mysqlConnetion;