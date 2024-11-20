import express from 'express';
import { readFileSync } from 'fs';

const app = express();
const port = 3000;

const responses = require('./utils/responses');

const usersRoutes = require('./routes/usersRoutes.ts');
const questionsRoutes = require('./routes/questionsRoutes.ts');
const answersRoutes = require('./routes/answersRoutes.ts');
const commentsRoutes = require('./routes/commentsRoutes.ts');

app.use('/users', usersRoutes);
app.use('/questions', questionsRoutes);
app.use('/answers', answersRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
 responses.success('Landing page, how about some docs?', res);
});

// If we get here, it's a 404
app.use((req, res, next) => {
  responses.notFound('Route Not Found', res);
});

app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});

