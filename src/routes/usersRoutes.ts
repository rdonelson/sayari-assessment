import express from 'express';
const router = express.Router();
const responses = require('../utils/responses');

router.get('/', (req: express.Request, res: express.Response) => {
  responses.success('Get All Users', res);
});

router.post('/', (req: express.Request, res: express.Response) => {
  responses.success('Add User', res, 201);
});

router.get('/:userId', (req: express.Request, res: express.Response) => {
  responses.success('Get User Details', res);
});

router.patch('/:userId', (req: express.Request, res: express.Response) => {
  responses.success('Update User', res);
});

router.delete('/:userId', (req: express.Request, res: express.Response) => {
  responses.noContentSuccess(res);
});

router.get('/:userId/questions', (req: express.Request, res: express.Response) => {
  responses.success('Get Questions for User', res);
});

router.get('/:userId/answers', (req: express.Request, res: express.Response) => {
  responses.success('Get Answers for User', res);
});

router.get('/:userId/comments', (req: express.Request, res: express.Response) => {
  responses.success('Get Comments for User', res);
});

module.exports = router;
