import React from "react";
import { QuestionContextProvider } from "../../Context/QuestionContext";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Question from "../Question/Question";

const Dashboard = () => {
  return (
    <>
      <QuestionContextProvider>
        <Header />
        <Question />
        <Navigation />
      </QuestionContextProvider>
    </>
  );
};

export default Dashboard;
