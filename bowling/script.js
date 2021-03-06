/*globals document*/

var i = 1;

function rollValue(obj) {

    var val = parseInt(obj.value);
    if (i <= 18) {
        testRoll(val, false);
        if (i % 2) {
            showButtons();
            setStrikeHTML('button10');
        } else {
            disableButtons(val);
            setSpareHTML('button10');
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
                setSpareHTML('button10');
            }
        } else if (i == 20) {
            var btn19 = document.getElementById('roll19');
            if (btn19.innerText == 'X') {
                if (roll == 10) {
                    setStrikeHTML('roll' + i);
                } else {
                    document.getElementById('roll' + i).innerText = roll + '';
                    disableButtons(roll);
                    setSpareHTML('button10');
                }
            } else if (roll == 10 && btn19.innerText != 'X') {
                setSpareHTML('roll' + i);
                setStrikeHTML('button10');
                showButtons();
            } else {
                document.getElementById('roll' + i).innerText = roll + '';
                setSpareHTML('button10');
                disableButtons(10);
                scoreCalc();
                i++;
            }
        } else {
            var btn20 = document.getElementById('roll' + (i - 1));
            if (btn20.innerText != 'X' && roll == 10) {
                setSpareHTML('roll' + i);
                disableButtons(10);
            } else if (roll == 10 && btn20.innerText == 'X') {
                setStrikeHTML('roll' + i);
                disableButtons(10);
            } else {
                document.getElementById('roll' + i).innerText = roll + '';
                disableButtons(10);
                scoreCalc();
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
    return ((i % 2) === 0 && roll == 10);
}

function setStrikeHTML(obj) {
    var btnSet = document.getElementById(obj);
    btnSet.innerText = 'X';
}

function setSpareHTML(obj) {
    var setHTML = document.getElementById(obj);
    setHTML.innerText = '/';
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

function scoreCalc() {
	var bowling = new BowlingGame();
    for(var j = 1; j <= 21; j++){
    	var temp = document.getElementById('roll' + j).innerText;
    	 if(temp == 'X' || temp == '/') {
    		 temp = parseInt('10');
    	 } else if (temp === '') {
    		 temp = parseInt('0');
    	 } else {
    		 temp = parseInt(temp);                		 
    	 } 
    	bowling.roll(temp);
    }
    for (var frameIndex = 0; frameIndex < 10; frameIndex++){
    	var frame = document.getElementById('score' + frameIndex);
    	frame.innerText = bowling.score();
    }
}

//Code to Hide Buttons
/*var hidden = false;
var isHidden = function (obj) {
    hidden = !hidden;
    if (hidden) {
        document.getElementById(obj).style.visibility = 'hidden';
    } else {
        document.getElementById(obj).style.visibility = 'visible';
    }
};*/