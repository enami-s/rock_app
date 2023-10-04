import * as readline from 'readline';
import { Choice } from './model';

export class GameView {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    getUserInput(question: string, callback: (input: string) => void) {
        this.rl.question(question, callback);
    }

    displayResult(message: string) {
        console.log(message);
    }
    displayError(message: string) {
        console.log(message);
    }

    close() {
        this.rl.close();
    }
}
