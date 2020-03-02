/*
============================================
; Title: Assignment 1.3
; Author: Zach Dahir
; Date: 2-19-20
; Description: Url parsing
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 1.3"));

var url = require("url");

var parsedURL =url.parse("https://www.module1.3example.com/profile?name=ZachDahir");

//output
console.log("");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

//program finish