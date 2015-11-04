/*globals document*/
var value = function (e) {
    return e;
};

    var i = 1;

function rollValue (pins) {

    if (i <= 21 && pins !== '10') {
        document.getElementById('roll' + (i)).innerHTML = pins;
        i++;
    } else if (i % 2) {
        
        document.getElementById('roll' + i).innerHTML = "X";
        i += 2;
    }
}


