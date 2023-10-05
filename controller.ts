import { GameView } from './view';
import { GameModel, Choice } from './model';

export type GameResultType = {
    userChoice: string;
    computerChoice: string;
    result: string;
} | string;

export class GameController {
    private readonly VALID_CHOICES: Choice[] = ['rock', 'scissors', 'paper'];

    private readonly CHOICE_MAP_JAPANESE: { [key in Choice]: string } = {
        'rock': 'グー',
        'scissors': 'チョキ',
        'paper': 'パー'
    };

    private readonly RESULT_MAP_JAPANESE: { [key: string]: string } = {
        'win': '勝ち',
        'lose': '負け',
        'draw': '引き分け'
    };

    constructor(
        private readonly view: GameView,
        private readonly model: GameModel
    ) {
        this.view = view;
        this.model = model;
    }

    private getChoiceFromJapanese(choiceInJapanese: string): Choice | null {
        const entry = Object.entries(this.CHOICE_MAP_JAPANESE).find(
            ([_, value]) => value === choiceInJapanese
        );

        return entry ? entry[0] as Choice : null;
    }

    playGameWithChoice(userChoiceInJapanese: string): GameResultType {
        const userChoice = this.getChoiceFromJapanese(userChoiceInJapanese);

        if (!userChoice) {
            return null;
        }

        const gameResult = this.model.playGame(userChoice);

        return {
            userChoice: userChoiceInJapanese,
            computerChoice: this.CHOICE_MAP_JAPANESE[gameResult.computerChoice],
            result: this.RESULT_MAP_JAPANESE[gameResult.result]
        };
    }
    play() {
        this.view.getUserInput("グー、チョキ、パーのどれかを入力してください: ", input => {
            const gameResult = this.playGameWithChoice(input);

            if (!gameResult) {
                this.view.displayError();
                this.view.close();
                return ;
            }

            this.view.displayResult(gameResult);
            this.view.close();
        });
    }
}


