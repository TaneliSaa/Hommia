var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


let port = 3004;
let ip = "127.0.0.1";

app.use(bodyParser.json());

var cors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors);

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'hommia',
    dateStrings : true,
});



connection.connect((err)=>{
    if(err) {
        console.log("Connection problems",err)
    } else {
        console.log("Connection succesfull")
}
});

app.listen(port, ip, () => {

});

module.exports = app
