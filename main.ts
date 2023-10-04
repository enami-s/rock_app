import { GameView } from './view';
import { GameModel } from './model';
import { GameController } from './controller';

const view = new GameView();
const model = new GameModel();
const controller = new GameController(view, model);

controller.play();
