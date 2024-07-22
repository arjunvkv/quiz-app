import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/summary" component={Summary} />
      </Switch>
    </Router>
  );
}

export default App;
