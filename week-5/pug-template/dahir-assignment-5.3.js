/*
============================================
; Title: Assignment 5.3
; Author: Zach Dahir
; Date: 3-17-20
; Description: PUG
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 5.3"));
console.log("");

//require statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");


var app = express();

//set path and view engine
app.set("/", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//get default page and display message
app.get("/", function(req, res){
    res.render("index", {
        message: "Hello this has been an example of PUG "
    });
});

//create server and display message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

//program end
