/*
============================================
; Title: Assignment 1.5
; Author: Zach Dahir
; Date: 2-19-20
; Description: 1.5 Hello World
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 1.5"));

var http = require('http');

function processRequest(req, res) {
  var body = 'Please work';

  var contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);