import React from "react";
import "./styles/App.css";
import Page from "./components/Page";
import WelcomePage from "./components/WelcomePage"
import LandingPage from "./components/LandingPage"
import ExpensePage from "./components/ExpensePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/landing">
          <Page><LandingPage /></Page>
        </Route>
        <Route path="/expense">
          <Page><ExpensePage /></Page>
        </Route>
        <Route path="/">
          <Page><WelcomePage /></Page>     
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
