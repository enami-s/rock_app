"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var GameController = /** @class */ (function () {
    function GameController(view, model) {
        this.view = view;
        this.model = model;
        this.VALID_CHOICES = ['rock', 'scissors', 'paper'];
        this.CHOICE_MAP_JAPANESE = {
            'rock': 'グー',
            'scissors': 'チョキ',
            'paper': 'パー'
        };
        this.RESULT_MAP_JAPANESE = {
            'win': '勝ち',
            'lose': '負け',
            'draw': '引き分け'
        };
        this.view = view;
        this.model = model;
    }
    GameController.prototype.getChoiceFromJapanese = function (choiceInJapanese) {
        var entry = Object.entries(this.CHOICE_MAP_JAPANESE).find(function (_a) {
            var _ = _a[0], value = _a[1];
            return value === choiceInJapanese;
        });
        return entry ? entry[0] : null;
    };
    GameController.prototype.playGameWithChoice = function (userChoiceInJapanese) {
        var userChoice = this.getChoiceFromJapanese(userChoiceInJapanese);
        if (!userChoice) {
            return null;
        }
        var gameResult = this.model.playGame(userChoice);
        return {
            userChoice: userChoiceInJapanese,
            computerChoice: this.CHOICE_MAP_JAPANESE[gameResult.computerChoice],
            result: this.RESULT_MAP_JAPANESE[gameResult.result]
        };
    };
    GameController.prototype.play = function () {
        var _this = this;
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", function (input) {
            var gameResult = _this.playGameWithChoice(input);
            if (!gameResult) {
                _this.view.displayError();
                _this.view.close();
                return;
            }
            _this.view.displayResult(gameResult);
            _this.view.close();
        });
    };
    return GameController;
}());
exports.GameController = GameController;
