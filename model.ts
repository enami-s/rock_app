
export const choices = ['rock', 'scissors', 'paper'] as const;
export type Choice = typeof choices[number];

export type GameResult = 'win' | 'lose' | 'draw';

export class GameModel {
    playGame(userChoice: Choice): { userChoice: Choice, computerChoice: Choice, result: GameResult } {
        const computerChoice: Choice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            return {
                userChoice,
                computerChoice,
                result: 'draw'
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
                result: 'win'
            };
        }

        return {
            userChoice,
            computerChoice,
            result: 'lose'
        };
    }
}
