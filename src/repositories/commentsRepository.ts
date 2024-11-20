import express from 'express';

const data = require('../data/stackoverfaux.json');

type Comment = {
  id: number,
  body: string,
  userId: number
};

exports.getComments = (questionId: number) => {
  const comments: Comment[] = [];

  data.forEach((question: any) => {
    if((question.id == questionId) && question.comments.length > 0){
      question.comments.forEach((comment: any) => {
        comments.push(formatComment(comment));
      });
    }
  });

  return comments;
};

const formatComment = (rawComment: any) => {
  return {
    id: rawComment.id,
    body: rawComment.body,
    userId: rawComment.user.id
  };
};