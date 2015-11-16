var result = 0;
var rollIndex = 0;

var BowlingGame = function () {
    this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
    this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
    var game = this;

        if (isStrike()) {
            result += getStrikeScore();
            rollIndex += 2;
        } else if (isSpare()) {
            result += getSpareScore();
            rollIndex++;
        } else {
            result += getNormalScore();
            rollIndex++;
        }


    return result;

    function isStrike() {
        return game.rolls[rollIndex] == 10;
    }

    function isSpare() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }

    function getStrikeScore() {
        return game.rolls[rollIndex] + (game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]) + (game.rolls[rollIndex + 3] + game.rolls[rollIndex + 4]);
    }

    function getSpareScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getNormalScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
   
    
};