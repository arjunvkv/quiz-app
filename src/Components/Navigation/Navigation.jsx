import React from "react";
import { useQuestionContext } from "../../Context/QuestionContext";

const Navigation = () => {
  const { questions, questionNumber, setQuestionNumber } = useQuestionContext();

  const handleNav = (dir) => {
    if (dir === "prev") {
      if (questionNumber <= 0) return;
      setQuestionNumber((prev) => prev - 1);
    } else {
      if (questionNumber >= questions.length - 1) {
        return;
      }
      setQuestionNumber((prev) => prev + 1);
    }
  };

  return (
    <div>
      <button onClick={() => handleNav("prev")}>Prev</button>
      <button onClick={() => handleNav("next")}>Next</button>
    </div>
  );
};

export default Navigation;
