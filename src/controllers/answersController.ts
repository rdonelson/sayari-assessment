import express from 'express';
const responses = require('../utils/responses');

exports.getAnswer = (req: express.Request, res: express.Response) => {
  responses.success('Answer Details', res);
};

exports.updateAnswer = (req: express.Request, res: express.Response) => {
  responses.success('Answer Updated', res);
};

exports.deleteAnswer = (req: express.Request, res: express.Response) => {
  responses.noContentSuccess(res);
};
