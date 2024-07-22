import React, { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

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
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
