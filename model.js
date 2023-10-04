"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = exports.Choice = void 0;
var Choice;
(function (Choice) {
    Choice["\u30B0\u30FC"] = "\u30B0\u30FC";
    Choice["\u30C1\u30E7\u30AD"] = "\u30C1\u30E7\u30AD";
    Choice["\u30D1\u30FC"] = "\u30D1\u30FC";
})(Choice || (exports.Choice = Choice = {}));
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    GameModel.prototype.playGame = function (userChoice) {
        var choicesArray = [Choice.グー, Choice.チョキ, Choice.パー];
        var computerChoice = choicesArray[Math.floor(Math.random() * 3)];
        var result = "";
        if (userChoice === computerChoice) {
            result = "引き分け";
        }
        else if ((userChoice === Choice.グー && computerChoice === Choice.チョキ) ||
            (userChoice === Choice.チョキ && computerChoice === Choice.パー) ||
            (userChoice === Choice.パー && computerChoice === Choice.グー)) {
            result = "勝ち";
        }
        else {
            result = "負け";
        }
        return {
            userChoice: userChoice,
            computerChoice: computerChoice,
            result: result
        };
    };
    return GameModel;
}());
exports.GameModel = GameModel;
