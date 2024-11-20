"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const usersRoutes = require('./routes/usersRoutes.ts');
const questionsRoutes = require('./routes/questionsRoutes.ts');
const answersRoutes = require('./routes/answersRoutes.ts');
const commentsRoutes = require('./routes/commentsRoutes.ts');
app.use('/users', usersRoutes);
app.use('/questions', questionsRoutes);
app.use('/answers', answersRoutes);
app.use('/comments', commentsRoutes);
app.get('/', (req, res) => {
    res.send('Landing page, how about some docs?');
});
// If we get here, it's a 404
app.use((req, res, next) => {
    res.status(404).send('Route Not Found');
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
