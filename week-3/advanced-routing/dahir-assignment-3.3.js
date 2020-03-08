/*
============================================
; Title: Assignment 3.3
; Author: Zach Dahir
; Date: 3-5-20
; Description: Advanced Routing
;===========================================
*/
//start program
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

//get for index page and employee id message
app.get("/:employeeId", function(request, response){
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId
    });
});

//server creation
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
//end program