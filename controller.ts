import { GameView } from './view';
import { GameModel, Choice } from './model';

export class GameController {
    private view: GameView;
    private model: GameModel;

    constructor(view: GameView, model: GameModel) {
        this.view = view;
        this.model = model;
    }

    playGameWithChoice(userChoice: Choice): string {
        if (!Object.values(Choice).includes(userChoice)) {
            return "「グー、チョキ、パーのどれかを入力し直してください」";
        }

        const gameResult = this.model.playGame(userChoice);

        return `
ユーザーの選択手: ${gameResult.userChoice}
コンピュータの選択手: ${gameResult.computerChoice}
勝敗結果: ${gameResult.result}
`.trim();
    }

    play() {
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", input => {
            const gameMessage = this.playGameWithChoice(input as Choice);
            if (gameMessage.includes("ユーザーの選択手")) {
                this.view.displayResult(gameMessage);
            } else {
                this.view.displayError(gameMessage);
            }
            this.view.close();
        });
    }
}
