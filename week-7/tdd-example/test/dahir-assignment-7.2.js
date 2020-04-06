/*
============================================
; Title: Assignment 7.2
; Author: Zach Dahir
; Date: 4-01-20
; Description: tdd example
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.3"));
console.log("");

//require statement
var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
//end program