"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller = require('../controllers/answersController');
router.get('/:answerId', controller.getAnswer);
router.patch('/:answerId', controller.updateAnswer);
router.delete('/:answerId', controller.deleteAnswer);
module.exports = router;
