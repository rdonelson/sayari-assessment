import express from 'express';

const data = require('../data/stackoverfaux.json');

type Question = {
  id: number,
  title: string,
  body: string,
  creation: number,
  score: number,
  userId: number,
  commentCount: number,
  answerCount: number
};

exports.getQuestions = () => {
  const questions: Question[] = [];

  data.forEach((question: any) => questions.push(formatQuestion(question)));

  return questions;
};

exports.getQuestionById = (questionId: number) => {
  for(const question of data){
    if(question.id == questionId){
      return formatQuestion(question);
    }
  }

  return null;
};

const formatQuestion = (rawQuestion: any) => {
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