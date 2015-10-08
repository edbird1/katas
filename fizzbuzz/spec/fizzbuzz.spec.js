/*globals require, describe, it, expect*/

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;

(function(){
    "use strict";
    
    describe("fizz buzz", function () {
    
        it("should return 0 given 0", function(){
            expect(fizzbuzz.getResult(0)).toEqual(0);
        });
        
    });
})();



