/*
============================================
; Title: Assignment 3.2
; Author: Zach Dahir
; Date: 3-3-20
; Description: Logging with Morgan
;===========================================
*/

//program start
//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//app initialization
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//setting up logger
app.use(logger("short"));

//get for index page
app.get("/", function(request, response){
    response.render("index", {
        message: "Assignment 3.2 completed"
    });
});

//server creation
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

//program end