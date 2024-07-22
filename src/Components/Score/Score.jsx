import React from "react";
import { useQuestionContext } from "../../Context/QuestionContext";

const Score = () => {
  const { calculateScore, questions } = useQuestionContext();
  const score = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div>
      <h1>Your Score</h1>
      <p>
        You answered {score} out of {totalQuestions} questions correctly.
      </p>
    </div>
  );
};

export default Score;
