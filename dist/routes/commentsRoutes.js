"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const responses = require('../utils/responses');
// Comment Endpoints
// - GET /comments/:commentId
// - PATCH /comments/:commentId
// - DELETE /comments/:commentId
router.get('/:commentId', (req, res) => {
    responses.success('Get Comment Details', res);
});
router.patch('/:commentId', (req, res) => {
    responses.success('Update Comment', res);
});
router.delete('/:commentId', (req, res) => {
    responses.noContentSuccess(res);
});
module.exports = router;
