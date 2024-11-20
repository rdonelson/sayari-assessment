"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data/stackoverfaux.json');
exports.getAnswers = (questionId) => {
    const answers = [];
    data.forEach((question) => {
        if ((question.id == questionId) && question.answers.length > 0) {
            question.answers.forEach((answer) => {
                answers.push(formatAnswer(answer));
            });
        }
    });
    return answers;
};
const formatAnswer = (rawAnswer) => {
    return {
        id: rawAnswer.id,
        body: rawAnswer.body,
        creation: rawAnswer.creation,
        score: rawAnswer.score,
        userId: rawAnswer.user.id,
        accepted: rawAnswer.accepted,
        commentCount: rawAnswer.comments.length
    };
};
