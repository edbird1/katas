/*globals document*/
var value = function (e) {
    return e;
};

function rollValue(e) {
    var i = 1;
    if (i <= 20 && e !== 10) {
        document.getElementById('roll' + i).innerHTML = e;
        i++;
    } else if (i % 2 !== 0 && e == 10) {
        i++;
        document.getElementById("roll" + 1).innerHTML = "X";
        i++;
    }
}