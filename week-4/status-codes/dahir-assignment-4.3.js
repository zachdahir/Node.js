/*
============================================
; Title: Assignment 4.3
; Author: Zach Dahir
; Date: 3-10-20
; Description: http status codes
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.3"));
console.log("");

//require statements
var express = require("express");
var http = require("http");

var app = express();

//get page for 404 error
app.get("/not-found", function(request, response){
    response.status(404);
    response.json({
        error: "Page not found."
    });
});

//get for ok, display message
app.get("/ok", function(request, response){
    response.status(200);
    response.json({
        message: "Everything is here"
    });
});

//get for not implemented, display message
app.get("/not-implemented", function(request, response){
    response.status(501);
    response.json({
        error: "Page not here"
    });
});

//create server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080.")
});

//end program