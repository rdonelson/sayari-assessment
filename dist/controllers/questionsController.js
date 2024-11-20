"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses = require('../utils/responses');
const questionsRepo = require('../repositories/questionsRepository');
const answersRepo = require('../repositories/answersRepository');
exports.getQuestions = (req, res) => {
    const questions = questionsRepo.getQuestions(req);
    responses.success(questions, res);
};
exports.getQuestion = (req, res) => {
    const questionId = req.params.questionId;
    const question = questionsRepo.getQuestionById(questionId);
    if (!question) {
        responses.notFound('Question ID ' + questionId + ' not found', res);
    }
    responses.success(question, res);
};
exports.addQuestion = (req, res) => {
    responses.success('Question Added', res, 201);
};
exports.updateQuestion = (req, res) => {
    responses.success('Question Updated', res);
};
exports.deleteQuestion = (req, res) => {
    responses.noContentSuccess(res);
};
exports.getQuestionAnswers = (req, res) => {
    const questionId = req.params.questionId;
    const answers = answersRepo.getAnswers(questionId);
    responses.success(answers, res);
};
exports.addQuestionAnswer = (req, res) => {
    responses.success('Question Answer Added', res, 201);
};
exports.getQuestionComments = (req, res) => {
    responses.success('Question Comments List', res);
};
exports.addQuestionComment = (req, res) => {
    responses.success('Question Comment Added', res, 201);
};
