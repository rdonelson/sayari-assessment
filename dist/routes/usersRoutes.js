"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const responses = require('../utils/responses');
router.get('/', (req, res) => {
    responses.success('Get All Users', res);
});
router.post('/', (req, res) => {
    responses.success('Add User', res, 201);
});
router.get('/:userId', (req, res) => {
    responses.success('Get User Details', res);
});
router.patch('/:userId', (req, res) => {
    responses.success('Update User', res);
});
router.delete('/:userId', (req, res) => {
    responses.noContentSuccess(res);
});
router.get('/:userId/questions', (req, res) => {
    responses.success('Get Questions for User', res);
});
router.get('/:userId/answers', (req, res) => {
    responses.success('Get Answers for User', res);
});
router.get('/:userId/comments', (req, res) => {
    responses.success('Get Comments for User', res);
});
module.exports = router;
