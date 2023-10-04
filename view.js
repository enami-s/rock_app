"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var readline = require("readline");
var GameView = /** @class */ (function () {
    function GameView() {
        this.readlineInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    GameView.prototype.getUserInput = function (question, callback) {
        this.readlineInterface.question(question, callback);
    };
    // displayResult(message: string) {
    //     console.log(message);
    // }
    GameView.prototype.displayResult = function (gameResult) {
        if (typeof gameResult === 'string') {
            console.log(gameResult);
            return;
        }
        var message = "\n\u30E6\u30FC\u30B6\u30FC\u306E\u9078\u629E\u624B: ".concat(gameResult.userChoice, "\n\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u9078\u629E\u624B: ").concat(gameResult.computerChoice, "\n\u52DD\u6557\u7D50\u679C: ").concat(gameResult.result, "\n    ").trim();
        console.log(message);
    };
    GameView.prototype.displayError = function (message) {
        console.log(message);
    };
    GameView.prototype.close = function () {
        this.readlineInterface.close();
    };
    return GameView;
}());
exports.GameView = GameView;
