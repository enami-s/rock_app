"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var readline = require("readline");
var GameView = /** @class */ (function () {
    function GameView() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    GameView.prototype.getUserInput = function (question, callback) {
        this.rl.question(question, callback);
    };
    GameView.prototype.displayResult = function (message) {
        console.log(message);
    };
    GameView.prototype.displayError = function (message) {
        console.log(message);
    };
    GameView.prototype.close = function () {
        this.rl.close();
    };
    return GameView;
}());
exports.GameView = GameView;
