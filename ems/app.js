/*
============================================
; Title: Assignment 6.4
; Author: Zach Dahir
; Date: 3-20-20
; Description: EMS app
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.4"));
console.log("");

//Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");

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

//set path and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//get index page and display title
app.get("/", function(request, response) {
  response.render("index",{
    title: "Home page",
  });
});

//create employee object
var employee = new Employee({
  firstName: "Zachary",
  lastName: "Dahir"
})

//create server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});

//end program