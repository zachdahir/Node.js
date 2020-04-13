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
var helmet = require("helmet");
var logger = require("morgan");
var csrf = require("csurf");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser")
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

var csrfProtection = csrf({cookie: true});

var app = express();

//set path and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

//get index page and display title
app.get("/", function(request, response) {
  Employee.find({}, function(err, employees){
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});

//get new page
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New',
  });
});

//process new employee entries
app.post("/process", function(request, response){
  console.log(request.body.txtFirstName);
  if(!request.body.txtFirstName){
    response.status(400).send("Entries must have a name");
    return;
  }

  //save employee names in variables
  var employeeFirstName = request.body.txtFirstName;
  var employeeLastName = request.body.txtLastName;

  //create new employee with entered information
  var employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName
  });

  //save new employee
  employee.save(function (error){
    if (error) throw error;
    console.log(employeeFirstName + employeeLastName + " saved successfully!");
  });

  //redirect to home page
  response.redirect("/");
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