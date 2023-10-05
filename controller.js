"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var GameController = /** @class */ (function () {
    function GameController(view, model) {
        this.view = view;
        this.model = model;
        this.VALID_CHOICES = ['rock', 'scissors', 'paper'];
        this.CHOICE_MAP = {
            'グー': 'rock',
            'チョキ': 'scissors',
            'パー': 'paper'
        };
        this.CHOICE_MAP_JAPANESE = {
            'rock': 'グー',
            'scissors': 'チョキ',
            'paper': 'パー'
        };
        this.view = view;
        this.model = model;
    }
    GameController.prototype.playGameWithChoice = function (userChoiceInJapanese) {
        var userChoice = this.CHOICE_MAP[userChoiceInJapanese];
        if (!userChoice) {
            return "「グー、チョキ、パーのどれかを入力し直してください」";
        }
        var gameResult = this.model.playGame(userChoice);
        return {
            userChoice: userChoiceInJapanese,
            computerChoice: this.CHOICE_MAP_JAPANESE[gameResult.computerChoice],
            result: gameResult.result
        };
    };
    //     play() {
    //         this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", input => {
    //             const gameResult = this.playGameWithChoice(input);
    //
    //             if (typeof gameResult === "string") { // エラーメッセージを確認
    //                 this.view.displayError(gameResult);
    //                 this.view.close();
    //                 return;
    //             }
    //
    //             const gameMessage = `
    // ユーザーの選択手: ${gameResult.userChoice}
    // コンピュータの選択手: ${gameResult.computerChoice}
    // 勝敗結果: ${gameResult.result}
    //             `.trim();
    //
    //             this.view.displayResult(gameMessage);
    //             this.view.close();
    //         });
    //     }
    GameController.prototype.play = function () {
        var _this = this;
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", function (input) {
            var gameResult = _this.playGameWithChoice(input);
            if (typeof gameResult === "string") { // エラーメッセージを確認
                _this.view.displayError(gameResult);
                _this.view.close();
                return;
            }
            _this.view.displayResult(gameResult); // 日本語の表示はGameViewで行います
            _this.view.close();
        });
    };
    return GameController;
}());
exports.GameController = GameController;
