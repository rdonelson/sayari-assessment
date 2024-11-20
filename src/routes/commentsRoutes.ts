import express from 'express';
const router = express.Router();
const responses = require('../utils/responses');

// Comment Endpoints
// - GET /comments/:commentId
// - PATCH /comments/:commentId
// - DELETE /comments/:commentId

router.get('/:commentId', (req: express.Request, res: express.Response) => {
  responses.success('Get Comment Details', res);
});

router.patch('/:commentId', (req: express.Request, res: express.Response) => {
  responses.success('Update Comment', res);
});

router.delete('/:commentId', (req: express.Request, res: express.Response) => {
  responses.noContentSuccess(res);
});

module.exports = router;
