import React, { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

  const calculateScore = () => {
    let score = 0;

    for (const ans of answers) {
      const correctAnswer = questions.find(
        (q) => q.question === ans.question
      )?.answer;

      if (ans.answer === correctAnswer) {
        score += 1;
      }
    }

    return score;
  };

  const questions = [
    {
      question: "JSON stands for",
      options: [
        "JavaScript Object Notation",
        "Java Object Notation",
        "JavaScript Object Normalization",
        "JavaScript Object-Oriented Notation",
      ],
      answer: "JavaScript Object Notation",
    },
    {
      question: "JSON is a _____ for storing and transporting data.",
      options: ["xml format", "text format", "JavaScript", "php format"],
      answer: "text format",
    },
  ];
  return (
    <QuestionContext.Provider
      value={{
        questions,
        questionNumber,
        setQuestionNumber,
        setAnswers,
        answers,
        calculateScore,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
