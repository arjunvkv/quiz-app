import React, { useEffect } from "react";
import { useQuestionContext } from "../../Context/QuestionContext";

const QuestionDashboard = () => {
  const { questions } = useQuestionContext();
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return <div>Questions</div>;
};

export default QuestionDashboard;
