"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller = require('../controllers/questionsController');
router.get('/', controller.getQuestions);
router.post('/', controller.addQuestion);
router.get('/:questionId', controller.getQuestion);
router.patch('/:questionId', controller.updateQuestion);
router.delete('/:questionId', controller.deleteQuestion);
router.get('/:questionId/answers', controller.getQuestionAnswers);
router.post('/:questionId/answers', controller.addQuestionAnswer);
router.get('/:questionId/comments', controller.getQuestionComments);
router.post('/:questionId/comments', controller.addQuestionComment);
module.exports = router;
