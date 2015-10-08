/*globals exports*/

var fizzbuzz = {
    getResult: function (passIn){
        if (passIn === 0){
            return 0;
        }
        else if (passIn % 15 === 0){
            return "fizzbuzz";
        }
        else if (passIn % 3 === 0){
            return "fizz";
        }
        else if (passIn % 5 === 0){
            return "buzz";
        }
        else {
            return passIn;
        }
    }
};

exports.fizzbuzz = fizzbuzz;

