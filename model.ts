export enum Choice {
    グー = "グー",
    チョキ = "チョキ",
    パー = "パー"
}

export class GameModel {
    playGame(userChoice: Choice): { userChoice: Choice, computerChoice: Choice, result: string } {
        const choicesArray: Choice[] = [Choice.グー, Choice.チョキ, Choice.パー];
        const computerChoice: Choice = choicesArray[Math.floor(Math.random() * 3)];

        let result: string = "";

        if (userChoice === computerChoice) {
            result = "引き分け";
        } else if (
            (userChoice === Choice.グー && computerChoice === Choice.チョキ) ||
            (userChoice === Choice.チョキ && computerChoice === Choice.パー) ||
            (userChoice === Choice.パー && computerChoice === Choice.グー)
        ) {
            result = "勝ち";
        } else {
            result = "負け";
        }

        return {
            userChoice,
            computerChoice,
            result
        };
    }
}
