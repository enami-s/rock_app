"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = exports.choices = void 0;
exports.choices = ['rock', 'scissors', 'paper'];
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    GameModel.prototype.playGame = function (userChoice) {
        var computerChoice = exports.choices[Math.floor(Math.random() * exports.choices.length)];
        if (userChoice === computerChoice) {
            return {
                userChoice: userChoice,
                computerChoice: computerChoice,
                result: 'draw'
            };
        }
        if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')) {
            return {
                userChoice: userChoice,
                computerChoice: computerChoice,
                result: 'win'
            };
        }
        return {
            userChoice: userChoice,
            computerChoice: computerChoice,
            result: 'lose'
        };
    };
    return GameModel;
}());
exports.GameModel = GameModel;
