import { GameController } from './controller';
import { GameView } from './view';
import { GameModel, Choice } from './model';

afterEach(() => {
    // Assuming you have an instance of GameView available as gameView
    gameView.close();
});

describe('RockApp', () => {
    let mockRandom;
    const mockView = new GameView();
    const model = new GameModel();
    const controller = new GameController(mockView, model);

    afterEach(() => {
        if (mockRandom) {
            mockRandom.mockRestore();
        }
    });

    describe('playGameWithChoice', () => {
        const scenarios = [
            { user: "グー", computer: "グー", computerRandom: 0, expected: "引き分け" },
            { user: "グー", computer: "チョキ", computerRandom: 0.4, expected: "勝ち" },
            { user: "グー", computer: "パー", computerRandom: 0.9, expected: "負け" },
            { user: "チョキ", computer: "グー", computerRandom: 0, expected: "負け" },
            { user: "チョキ", computer: "チョキ", computerRandom: 0.4, expected: "引き分け" },
            { user: "チョキ", computer: "パー", computerRandom: 0.9, expected: "勝ち" },
            { user: "パー", computer: "グー", computerRandom: 0, expected: "勝ち" },
            { user: "パー", computer: "チョキ", computerRandom: 0.4, expected: "負け" },
            { user: "パー", computer: "パー", computerRandom: 0.9, expected: "引き分け" }
        ];

        scenarios.forEach(scenario => {
            it(`should return "${scenario.expected}" when user chooses "${scenario.user}" and computer chooses "${scenario.computer}"`, () => {
                mockRandom = jest.spyOn(Math, 'random').mockReturnValue(scenario.computerRandom);
                const result = controller.playGameWithChoice(scenario.user as Choice);
                expect(result).toMatch(`ユーザーの選択手: ${scenario.user}`);
                expect(result).toMatch(`コンピュータの選択手: ${scenario.computer}`);
                expect(result).toMatch(`勝敗結果: ${scenario.expected}`);
            });
        });
    });

    describe('Invalid Input', () => {
        it('should display error for string input', () => {
            const result = controller.playGameWithChoice('Test');
            expect(result).toBe('「グー、チョキ、パーのどれかを入力し直してください」');
        });
    });
});