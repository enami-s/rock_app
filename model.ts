
export type Choice = 'rock' | 'scissors' | 'paper';

export class GameModel {
    playGame(userChoice: Choice): { userChoice: Choice, computerChoice: Choice, result: string } {
        const choicesArray: Choice[] = ['rock', 'scissors', 'paper'];
        const computerChoice: Choice = choicesArray[Math.floor(Math.random() * 3)];

        if (userChoice === computerChoice) {
            return {
                userChoice,
                computerChoice,
                result: '引き分け'
            };
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return {
                userChoice,
                computerChoice,
                result: '勝ち'
            };
        }

        return {
            userChoice,
            computerChoice,
            result: '負け'
        };
    }
}
