var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootbanana",
    database: "friend_finderDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    })



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});