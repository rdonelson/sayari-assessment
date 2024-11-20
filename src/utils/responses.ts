import express from 'express';

exports.success = (data: any, res: express.Response, statusCode = 200) => {
  res.status(statusCode).json({data});
};

exports.error = (data: string, error: Error, res: express.Response, statusCode = 500) => {
  res.status(statusCode).json({data, error: Error.toString()});
};

exports.noContentSuccess = (res: express.Response) => {
  res.status(204).send();
};

exports.notFound = (data: string, res: express.Response) => {
  res.status(404).json({data});
};
