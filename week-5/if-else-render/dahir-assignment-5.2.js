/*
============================================
; Title: Assignment 5.2
; Author: Zach Dahir
; Date: 3-17-20
; Description: if-else-require
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 5.2"));
console.log("");

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
 
app = express();

//set path and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//array of names
var f = [
    "Sarah",
    "Josh",
    "Jake",
    "Zach"
];

//get default page and display names
app.get("/", function(req, res){
    res.render("index", {
        names: f
    })
});

//create server on port 8080 and display start message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

//program end

