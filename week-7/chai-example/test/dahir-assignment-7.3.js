/*
============================================
; Title: Assignment 7.3
; Author: Zach Dahir
; Date: 4-01-20
; Description: chai example
;===========================================
*/

//program start
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.3"));
console.log("");

//require statements
var fruits = require("../dahir-assignment-7.3");
var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));
    });
});
//end program