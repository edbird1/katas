/*globals require, describe, it, expect*/

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;

describe('fizz buzz', function() {
    it('should return 0 given 0', function(){
        var result = fizzbuzz.getResult(0);
        expect(result.toEqual(0));
    });
});
