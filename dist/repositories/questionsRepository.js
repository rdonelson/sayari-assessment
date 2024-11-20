"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data/stackoverfaux.json');
exports.getQuestions = () => {
    const questions = [];
    data.forEach((question) => questions.push(formatQuestion(question)));
    return questions;
};
exports.getQuestionById = (questionId) => {
    for (const question of data) {
        if (question.id == questionId) {
            return formatQuestion(question);
        }
    }
    return null;
};
const formatQuestion = (rawQuestion) => {
    return {
        id: rawQuestion.id,
        title: rawQuestion.title,
        body: rawQuestion.body,
        creation: rawQuestion.creation,
        score: rawQuestion.score,
        userId: rawQuestion.user.id,
        commentCount: rawQuestion.comments.length,
        answerCount: rawQuestion.answers.length
    };
};
