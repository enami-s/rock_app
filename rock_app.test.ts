import { GameController } from './controller';
import { GameView } from './view';
import { GameModel, Choice } from './model';

// afterEach(() => {
//     if (mockRandom) {
//         mockRandom.mockRestore();
//     }
//     mockView.close();  // 追加: readline インターフェースを閉じる
// });

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
                expect(result.userChoice).toBe(scenario.user);
                expect(result.computerChoice).toBe(scenario.computer);
                expect(result.result).toBe(scenario.expected);
            });
        });
    });

    describe('Invalid Input', () => {
        it('should display error for string input', () => {
            const result = controller.playGameWithChoice('Test');
            expect(result).toBeNull();
        });
    });
});
