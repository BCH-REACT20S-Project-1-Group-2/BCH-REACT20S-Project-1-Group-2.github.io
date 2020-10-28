import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage"
import LandingPage from "./components/LandingPage"
import ExpensePage from "./components/ExpensePage"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
