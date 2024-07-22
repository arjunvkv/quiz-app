import React from "react";
import { useQuestionContext } from "../../Context/QuestionContext";

const Question = () => {
  const { questions, questionNumber, setAnswers, answers } =
    useQuestionContext();

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => {
      const match = answers.find((ques) => ques.question === question.question);
      const filtered = answers.filter(
        (ques) => ques.question !== question.question
      );
      if (match) return [...filtered, { ...question, answer }];
      else return [...prev, { ...question, answer }];
    });
  };

  const displayAns = (ques, option) => {
    const match = answers.find((ans) => ans.question === ques.question);
    return match ? match.answer === option : false;
  };

  return (
    <>
      <h1>
        {questionNumber + 1}) {questions[questionNumber].question}
      </h1>
      <div>
        {questions[questionNumber].options.map((option) => (
          <label key={option}>
            <input
              name={`question-${questionNumber}`}
              type="radio"
              value={option}
              checked={displayAns(questions[questionNumber], option)}
              onChange={() => handleAnswer(questions[questionNumber], option)}
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};

export default Question;
