"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses = require('../utils/responses');
exports.getAnswer = (req, res) => {
    responses.success('Answer Details', res);
};
exports.updateAnswer = (req, res) => {
    responses.success('Answer Updated', res);
};
exports.deleteAnswer = (req, res) => {
    responses.noContentSuccess(res);
};
