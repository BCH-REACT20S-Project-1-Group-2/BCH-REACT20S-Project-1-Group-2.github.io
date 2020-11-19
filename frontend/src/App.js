import React from "react";
import "./styles/App.css";
import Page from "./components/Page";
import WelcomeMain from "./components/WelcomeMain"
import LandingMain from "./components/LandingMain"
import ExpenseMain from "./components/ExpenseMain"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  // Load state from local storage on construct
  state = {
    username: JSON.parse(localStorage.getItem("bdgtCtrl-username")) || "",
    salary: JSON.parse(localStorage.getItem("bdgtCtrl-salary")) || 0,
    saving: JSON.parse(localStorage.getItem("bdgtCtrl-saving")) || 0,
    expenses: JSON.parse(localStorage.getItem("bdgtCtrl-expenses")) || 0,
    expenseList: JSON.parse(localStorage.getItem("bdgtCtrl-expenseList")) || [],
  };

  handleChange = (target) => {
    // If the given target content is valid ...
    if (target.validity.valid) {
      // ... set it to state, as a number if possible:
      this.setState({ [target.name]: target.valueAsNumber || target.value });
      // ... and to local storage:
      localStorage.setItem(
        `bdgtCtrl-${target.name}`,
        JSON.stringify(target.value)
      );
    }
  };

  render() {
    return (
      <Router className="App">
        <Switch>
          <Route path="/landing">
            <Page username={this.state.username}>
              <LandingMain
                salary={this.state.salary}
                saving={this.state.saving}
                expenses={this.state.expenses}
                handleChange={this.handleChange}
              />
            </Page>
          </Route>
          <Route path="/expense">
            <Page username={this.state.username}>
              <ExpenseMain
                expenses={this.state.expenses}
                expenseList={this.state.expenseList}
                handleChange={this.handleChange}
              />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <WelcomeMain
                username={this.state.username}
                handleChange={this.handleChange}
              />
            </Page>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
