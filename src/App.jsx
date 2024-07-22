import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuestionContextProvider } from "./Context/QuestionContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <QuestionContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </QuestionContextProvider>
  );
}

export default App;
