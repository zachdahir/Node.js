/*
============================================
; Title: Assignment 2.4
; Author: Zach Dahir
; Date: 2-28-20
; Description: EJS
;===========================================
*/
//start program

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.4"));
console.log("");

//requiring express, http, and  path for file
var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

//set path for views and set to use EJS
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

//route interceptor for homepage 
app.get("/", function (request, response){
    response.render("index",{
        firstName: "Zachary",
        lastName: "Dahir",
        address: "12345 Callahan Drive"
    });
});

//setting server for port 8080
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.")
});

//end program
