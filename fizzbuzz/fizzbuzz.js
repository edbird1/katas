/*globals exports*/

var fizzbuzz = {
    getResult: function (passIn){
        if (passIn === 0){
            return 0;
        }
        else if (passIn % 15 === 0){
            console.log("fizzbuzz");
            return "fizzbuzz";
        }
        else if (passIn % 3 === 0){
            console.log("fizz");
            return "fizz";
        }
        else if (passIn % 5 === 0){
            console.log("buzz");
            return "buzz";
        }
        else {
            console.log(passIn);
            return passIn;
          
        } 
    }
 

};

function upTo (num){
        if(num >= 0){
            fizzbuzz.getResult(num);
            return upTo(num-1);
        }
}

exports.fizzbuzz = fizzbuzz;

