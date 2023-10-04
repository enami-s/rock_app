
import { GameView } from './view';
import { GameModel, Choice } from './model';

export type GameResultType = {
    userChoice: string;
    computerChoice: string;
    result: string;
} | string; // stringはエラーメッセージ用

export class GameController {
    private readonly VALID_CHOICES: Choice[] = ['rock', 'scissors', 'paper'];
    private readonly CHOICE_MAP: { [key: string]: Choice } = {
        'グー': 'rock',
        'チョキ': 'scissors',
        'パー': 'paper'
    };

    private readonly CHOICE_MAP_JAPANESE: { [key in Choice]: string } = {
        'rock': 'グー',
        'scissors': 'チョキ',
        'paper': 'パー'
    };

    constructor(
        private readonly view: GameView,
        private readonly model: GameModel
    ) {
        this.view = view;
        this.model = model;
    }

    playGameWithChoice(userChoiceInJapanese: string): GameResultType {
        const userChoice = this.CHOICE_MAP[userChoiceInJapanese];

        if (!userChoice) {
            return "「グー、チョキ、パーのどれかを入力し直してください」";
        }

        const gameResult = this.model.playGame(userChoice);

        return {
            userChoice: userChoiceInJapanese,
            computerChoice: this.CHOICE_MAP_JAPANESE[gameResult.computerChoice],
            result: gameResult.result
        };
    }

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

    play() {
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", input => {
            const gameResult = this.playGameWithChoice(input);

            if (typeof gameResult === "string") { // エラーメッセージを確認
                this.view.displayError(gameResult);
                this.view.close();
                return;
            }

            this.view.displayResult(gameResult); // 日本語の表示はGameViewで行います
            this.view.close();
        });
    }
}
