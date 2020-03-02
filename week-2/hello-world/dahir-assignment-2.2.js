/*
============================================
; Title: Assignment 2.2
; Author: Zach Dahir
; Date: 2-25-20
; Description: Hello World
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.2"));
console.log("");

//require statements
var express = require("express");
var http = require("http");

//initializing app
var app = express();

app.use(function (request, response) {
    console.log("In comes a request to: " + request.url);

    response.end("Hello World");
});

http.createServer(app).listen(8080);

//end program