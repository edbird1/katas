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

function rollValue(obj) {

    var val = parseInt(obj.value);
    if (i <= 18) {
        testRoll(val, false);
        if (i % 2) {
            showButtons();
            var btn10 = document.getElementById('button10');
            btn10.innerText = 'X';
        } else {
            disableButtons(val);
            var btn10 = document.getElementById('button10');
            btn10.innerText = '/';
        }
    } else {
        testRoll(val, true);
    }
}

function testRoll(roll, isFrame10) {
    if (isFrame10) {
        if (i == 19) {
            var btn = document.getElementById('roll19');
            btn.innerText = (roll == 10) ? 'X' : roll;
            if (roll != 10) {
                disableButtons(roll);
                var btn10 = document.getElementById('button10');
                btn10.innerText = '/';
            }
        } else if (i == 20) {
            var btn19 = document.getElementById('roll19');
            console.log(btn19.innerText);
            if (roll == 10 && btn19.innerText == 'X') {
                document.getElementById('roll' + i).innerText = 'X';
            } else if (roll == 10 && btn19.innerText != 'X') {
                document.getElementById('roll' + i).innerText = '/';
                showButtons();
            } else {
                document.getElementById('roll' + i).innerText = roll + '';
                disableButtons(roll);
                var btn10 = document.getElementById('button10');
                btn10.innerText = '/';
            }
        } else {
            var btn20 = document.getElementById('roll' + (i - 1));
            if (roll == 10 && btn20.innerText != 'X') {
                document.getElementById('roll' + i).innerText = '/';
            } else if (roll == 10) {
                document.getElementById('roll' + i).innerText = 'X';
            } else {
                document.getElementById('roll' + i).innerText = roll + '';
            }

        }
        i++;
    } else {
        if (isStrike(roll)) {
            document.getElementById('roll' + i).innerHTML = 'X';
            i += 2;
        } else if (isSpare(roll)) {
            document.getElementById('roll' + i).innerHTML = '/';
            i++;
        } else {
            var v1 = (document.getElementById('roll' + i));
            v1.innerText = roll + '';
            disableButtons(roll);
            i++;
        }
    }
}

function isStrike(roll) {
    return ((i % 2) == 1 && roll == 10);
}

function isSpare(roll) {
    return ((i % 2) == 0 && roll == 10);
}

function disableButtons(roll) {
    for (var j = 1, maxRoll = 9; j <= roll; j++) {
        var obj = document.getElementById('button' + maxRoll);
        obj.disabled = true;
        maxRoll--;
    }
}

function showButtons() {
    for (var j = 0; j <= 10; j++) {
        var obj = document.getElementById('button' + j);
        obj.disabled = false;
    }
}