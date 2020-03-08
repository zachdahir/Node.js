/*
============================================
; Title: Assignment 3.2
; Author: Zach Dahir
; Date: 3-6-20
; Description: Putting it all together
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

//get for index page
app.get("/", function(request, response){
    response.render("index", {
        message: "Home Page"
    });
});

//get for about page
app.get("/about", function(request, response){
    response.render("about", {
        message: "About Page"
    });
});

//get for contact page
app.get("/contact", function(request, response){
    response.render("contact", {
        message: "Contact Page"
    });
});

//get for products page
app.get("/products", function(request, response){
    response.render("products", {
        message: "Products Page"
    });
});

//server creation
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080.");
});

//end program