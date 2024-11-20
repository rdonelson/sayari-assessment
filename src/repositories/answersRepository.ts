import express from 'express';

const data = require('../data/stackoverfaux.json');

type Answer = {
  id: number,
  body: string,
  creation: number,
  score: number,
  userId: number,
  accepted: boolean,
  commentCount: number
};

exports.getAnswers = (questionId: number) => {
  const answers: Answer[] = [];

  data.forEach((question: any) => {
    if((question.id == questionId) && question.answers.length > 0){
      question.answers.forEach((answer: any) => {
        answers.push(formatAnswer(answer));
      });
    }
  });

  return answers;
};

const formatAnswer = (rawAnswer: any) => {
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