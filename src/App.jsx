import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuestionContextProvider } from "./Context/QuestionContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Summary/Summary";
import Score from "./Components/Score/Score";

function App() {
  return (
    <QuestionContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </Router>
    </QuestionContextProvider>
  );
}

export default App;
