import express from 'express';
const router = express.Router();
const controller = require('../controllers/answersController');

router.get('/:answerId', controller.getAnswer);
router.patch('/:answerId', controller.updateAnswer);
router.delete('/:answerId', controller.deleteAnswer);

module.exports = router;
