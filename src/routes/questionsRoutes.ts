import express from 'express';
const router = express.Router();
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
