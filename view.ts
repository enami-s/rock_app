import * as readline from 'readline';
import { GameResultType } from './controller';
import { Choice } from './model';

export class GameView {
    private readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    getUserInput(question: string, callback: (input: string) => void) {
        this.readlineInterface.question(question, callback);
    }

    // displayResult(message: string) {
    //     console.log(message);
    // }

    displayResult(gameResult: GameResultType) {
        if (typeof gameResult === 'string') {
            console.log(gameResult);
            return;
        }
        const message = `
ユーザーの選択手: ${gameResult.userChoice}
コンピュータの選択手: ${gameResult.computerChoice}
勝敗結果: ${gameResult.result}
    `.trim();
        console.log(message);
    }

    displayError(message: string) {
        console.log(message);
    }

    close() {
        this.readlineInterface.close();
    }
}
