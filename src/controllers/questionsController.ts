import express from 'express';
const responses = require('../utils/responses');
const questionsRepo = require('../repositories/questionsRepository');
const answersRepo = require('../repositories/answersRepository');
const commentsRepo = require('../repositories/commentsRepository');

exports.getQuestions = (req: express.Request, res: express.Response) => {
    const questions = questionsRepo.getQuestions(req);

    responses.success(questions, res);
};

exports.getQuestion = (req: express.Request, res: express.Response) => {
    const questionId = req.params.questionId;
    const question = questionsRepo.getQuestionById(questionId);

    if(!question){
        responses.notFound('Question ID ' + questionId + ' not found', res);
        return;
    }

    responses.success(question, res);
};

exports.addQuestion = (req: express.Request, res: express.Response) => {
    responses.success('Question Added', res, 201);
};

exports.updateQuestion = (req: express.Request, res: express.Response) => {
    responses.success('Question Updated', res);
};

exports.deleteQuestion = (req: express.Request, res: express.Response) => {
    responses.noContentSuccess(res);
};

exports.getQuestionAnswers = (req: express.Request, res: express.Response) => {
    const questionId = req.params.questionId;
    const question = questionsRepo.getQuestionById(questionId);

    if(!question){
        responses.notFound('Question ID ' + questionId + ' not found', res);
        return;
    }

    const answers = answersRepo.getAnswers(questionId);

    responses.success(answers, res);
};

exports.addQuestionAnswer = (req: express.Request, res: express.Response) => {
    responses.success('Question Answer Added', res, 201);
};

exports.getQuestionComments = (req: express.Request, res: express.Response) => {
    const questionId = req.params.questionId;
    const question = questionsRepo.getQuestionById(questionId);

    if(!question){
        responses.notFound('Question ID ' + questionId + ' not found', res);
        return
    }

    const comments = commentsRepo.getComments(questionId);

    responses.success(comments, res);
};

exports.addQuestionComment = (req: express.Request, res: express.Response) => {
    responses.success('Question Comment Added', res, 201);
};
