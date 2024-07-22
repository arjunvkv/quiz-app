import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestionContext } from "../../Context/QuestionContext";

const Summary = () => {
  const { questions, answers, setQuestionNumber } = useQuestionContext();
  const navigate = useNavigate();

  const checkAnswer = (question, userAnswer) => {
    return question.answer === userAnswer;
  };

  const handleQuestionClick = (index) => {
    setQuestionNumber(index);
    navigate("/");
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
          <div key={index} style={{ marginBottom: "20px" }}>
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
            <button onClick={() => handleQuestionClick(index)}>
              Go to Question
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
