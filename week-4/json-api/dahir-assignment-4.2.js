/*
============================================
; Title: Assignment 4.2
; Author: Zach Dahir
; Date: 3-10-20
; Description: JSON API's
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 4.2"));
console.log("");

//require statements
var express = require("express");
var http = require("http");

var app = express();

//get and display employee 368
app.get("/employee/:id", function(request, response){
    var id = parseInt(request.params.id, 368);

    response.json({
        firstName: "Zach",
        lastName: "Dahir",
        title: "Full-Stack Developer",
        address: "12345 Imaginary Drive",
    });
});

//Server creation on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

//end program