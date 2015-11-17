var result = 0;
var rollIndex = 0;

var BowlingGame = function () {
    this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
    this.rolls.push(pins);
};

BowlingGame.prototype.frames = function (roll1, roll2, roll3) {
    this.frame = {
        roll1: undefined,
        roll2: undefined,
        roll3: undefined,
        score: ''
    };
};

BowlingGame.prototype.score = function () {
    var game = this;

    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
        if (isStrike()) {
            result += getStrikeScore();
            rollIndex++;
        } else if (isSpare()) {
            result += getSpareScore();
            rollIndex +=2;
        } else {
            result += getNormalScore();
            rollIndex +=2;
        }
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
        return parseInt(game.rolls[rollIndex]) + parseInt(game.rolls[rollIndex + 1]);
    }


};