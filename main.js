"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("./view");
var model_1 = require("./model");
var controller_1 = require("./controller");
var view = new view_1.GameView();
var model = new model_1.GameModel();
var controller = new controller_1.GameController(view, model);
controller.play();
