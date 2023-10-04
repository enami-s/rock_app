import * as readline from 'readline';
import { GameResultType } from './controller';

export class GameView {
    private readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    getUserInput(question: string, callback: (input: string) => void) {
        this.readlineInterface.question(question, callback);
    }

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


    displayError() {
        console.log("「グー、チョキ、パーのどれかを入力し直してください」");
    }

    close() {
        this.readlineInterface.close();
    }
}

