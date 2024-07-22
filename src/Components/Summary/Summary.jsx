import React from "react";
import { useQuestionContext } from "../../Context/QuestionContext";

const Summary = () => {
  const { questions, answers } = useQuestionContext();

  const checkAnswer = (question, userAnswer) => {
    return question.answer === userAnswer;
  };

  return (
    <div>
      <h2>Summary</h2>
      {questions.map((question, index) => {
        const userAnswer = answers.find(
          (ans) => ans.question === question.question
        )?.answer;
        const isCorrect = checkAnswer(question, userAnswer);
        return (
          <div key={index}>
            <h3>
              {index + 1}. {question.question}
            </h3>
            <p>
              <strong>Your Answer:</strong> {userAnswer || "No answer provided"}
            </p>
            <p>
              <strong>Correct Answer:</strong> {question.answer}
            </p>
            <p style={{ color: isCorrect ? "green" : "red" }}>
              {isCorrect ? "Correct" : "Incorrect"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
