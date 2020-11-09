import React from "react";
import "./styles/App.css";
import WelcomePage from "./components/WelcomePage";
import LandingPage from "./components/LandingPage";
import ExpensePage from "./components/ExpensePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
