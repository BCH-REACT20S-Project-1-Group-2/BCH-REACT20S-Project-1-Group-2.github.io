import React from "react";
import "./styles/App.css";
import Page from "./components/Page";
import WelcomeMain from "./components/WelcomeMain"
import LandingMain from "./components/LandingMain"
import ExpenseMain from "./components/ExpenseMain"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/landing">
          <Page><LandingMain /></Page>
        </Route>
        <Route path="/expense">
          <Page><ExpenseMain /></Page>
        </Route>
        <Route path="/">
          <Page><WelcomeMain /></Page>     
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
