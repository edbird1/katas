/*globals require, describe, it, expect*/

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;

(function(){
    "use strict";
    
    describe("fizz buzz getResult function", function () {
    
        it("should return 0 given 0", function(){
            expect(fizzbuzz.getResult(0)).toEqual(0);
        });
    
        it("should return 1 given 1", function(){
            expect(fizzbuzz.getResult(1)).toEqual(1);
        });
    
        it("should return 2 given 2", function(){
            expect(fizzbuzz.getResult(2)).toEqual(2);
        });
    
        it("should return fizz given 3", function(){
            expect(fizzbuzz.getResult(3)).toEqual("fizz");
        });
    
        it("should return buzz given 5", function(){
            expect(fizzbuzz.getResult(5)).toEqual("buzz");
        });
    
        it("should return fizzbuzz given 15", function(){
            expect(fizzbuzz.getResult(15)).toEqual("fizzbuzz");
        });
    
    });
        
    describe("fizz buzz upTo function", function () {    
        var result = "0, 1, 2, fizz";
        it("should return '" + result + "' given 3", function(){
            expect(upTo(3)).toEqual(result);
        });
    });
    
})();



