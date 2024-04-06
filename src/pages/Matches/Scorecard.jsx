import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatchSchedule from "./MatchSchedule";
import Scorecard from "./Scorecard"; // Assuming Scorecard.jsx contains your scorecard component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MatchSchedule />
        </Route>
        <Route path="/scorecard">
          <Scorecard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
