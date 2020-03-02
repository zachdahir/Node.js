/*
============================================
; Title: Assignment 2.3
; Author: Zach Dahir
; Date: 2-28-20
; Description: Routing
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.3"));
console.log("");

//requiring express and http for file
var express = require("express");
var http = require("http");

var app = express();

//route interceptor for home page as well as welcome message
app.get("/", function (request, response){
   response.end("Welcome to the homepage!"); 
});

//route interceptor for about page as well as welcome message
app.get("/about", function (request, response){
    response.end("Welcome to the about page!");
});

//route interceptor for contact page as well as welcome message
app.get("/contact", function (request, response){
    response.end("Welcome to the contact page!");
});

//route interceptor for bad requests as well as error message
app.use(function (request, response){
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(8080);

//end program