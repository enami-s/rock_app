"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    GameModel.prototype.playGame = function (userChoice) {
        var choicesArray = ['rock', 'scissors', 'paper'];
        var computerChoice = choicesArray[Math.floor(Math.random() * 3)];
        if (userChoice === computerChoice) {
            return {
                userChoice: userChoice,
                computerChoice: computerChoice,
                result: '引き分け'
            };
        }
        if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')) {
            return {
                userChoice: userChoice,
                computerChoice: computerChoice,
                result: '勝ち'
            };
        }
        return {
            userChoice: userChoice,
            computerChoice: computerChoice,
            result: '負け'
        };
    };
    return GameModel;
}());
exports.GameModel = GameModel;
