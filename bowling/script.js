/*globals document*/
var hidden = false;
var i = 1;

var isHidden = function (obj) {
    hidden = !hidden;
    if (hidden) {
        document.getElementById(obj).style.visibility = 'hidden';
    } else {
        document.getElementById(obj).style.visibility = 'visible';
    }
};

function rollValue(pins) {

    if (i <= 21 && pins !== '10') {
        document.getElementById('roll' + i).innerHTML = pins;
        document.getElementById('button10').innerHTML = '/';
        i++;
        isHidden('testbutton');
    } else if (i == 20 && pins == '10') {
        document.getElementById('roll' + i).innerHTML = 'X';
        i += 1;
    } else if (i % 2 && pins == '10') {
        document.getElementById('roll' + i).innerHTML = 'X';
        if (i == 19) {
            i += 1;
        } else {
            i += 2;
        }

    }

}

console.log(2 % 2);