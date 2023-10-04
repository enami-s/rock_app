"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var model_1 = require("./model");
var GameController = /** @class */ (function () {
    function GameController(view, model) {
        this.view = view;
        this.model = model;
    }
    GameController.prototype.playGameWithChoice = function (userChoice) {
        if (!Object.values(model_1.Choice).includes(userChoice)) {
            return "「グー、チョキ、パーのどれかを入力し直してください」";
        }
        var gameResult = this.model.playGame(userChoice);
        return "\n\u30E6\u30FC\u30B6\u30FC\u306E\u9078\u629E\u624B: ".concat(gameResult.userChoice, "\n\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u9078\u629E\u624B: ").concat(gameResult.computerChoice, "\n\u52DD\u6557\u7D50\u679C: ").concat(gameResult.result, "\n").trim();
    };
    GameController.prototype.play = function () {
        var _this = this;
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", function (input) {
            var gameMessage = _this.playGameWithChoice(input);
            if (gameMessage.includes("ユーザーの選択手")) {
                _this.view.displayResult(gameMessage);
            }
            else {
                _this.view.displayError(gameMessage);
            }
            _this.view.close();
        });
    };
    return GameController;
}());
exports.GameController = GameController;
