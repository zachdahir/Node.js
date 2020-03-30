/*
============================================
; Title: Assignment 6.3
; Author: Zach Dahir
; Date: 3-26-20
; Description: Mongoose Connection
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.3"));
console.log("");

//require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//Connect to mongo server
var mongoDB = "mongodb+srv://zdahir:Nemo3125@buwebdev-cluster-1-7ahfl.mongodb.net/EMS";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

//error display and success display
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();

app.use(logger("short"));

//create server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application connected to port 8080!");
});

//end program
