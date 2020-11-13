import React from "react";
import "./styles/App.css";
import Page from "./components/Page";
import WelcomeMain from "./components/WelcomeMain"
import LandingMain from "./components/LandingMain"
import ExpenseMain from "./components/ExpenseMain"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    username: JSON.parse(localStorage.getItem("bdgtCtrl-username")) || "",
    salary: JSON.parse(localStorage.getItem("bdgtCtrl-salary")) || 0,
    saving: JSON.parse(localStorage.getItem("bdgtCtrl-saving")) || 0,
    expenses: JSON.parse(localStorage.getItem("bdgtCtrl-expenses")) || 0,
    newExpenseCategory: "",
    newExpenseAmount: 0,
    expenseList: JSON.parse(localStorage.getItem("bdgtCtrl-expenseList")) || [],
    categoryList: require("./phrases/Categories.json"),
  };

  handleChange = (e) => {
    if (e.target.validity.valid) { // If the event target content is valid ...
      this.setState({ [e.target.name]: e.target.value }); // ... set it to state
      localStorage.setItem(`bdgtCtrl-${e.target.name}`, JSON.stringify(e.target.value)); // ... and to local storage
    }
  };


  addExpense = (category, amount) => {
    // Create a pseudo event with the properties required in handleChange for "expenseList" property state change  
    this.handleChange({
      target: { 
        validity: {valid: true},
        name: "expenseList",
        value: [
          {
            id: this.state.expenseList.length,
            category: category,
            amount: parseFloat(amount),
          },
          ...this.state.expenseList
        ]
      },
    });
    // Create a pseudo event with the properties required in handleChange for "expenses" property state change 
    this.handleChange({
      target: {
        validity: {valid: true},
        name: "expenses",
        value: this.state.expenses + parseFloat(amount)
      }
    })
  };
  
  delExpense = (id, amount) => {
    // Create a pseudo event with the properties required in handleChange for "expenseList" property state change
    this.handleChange({
      target: {
        validity: {valid: true},
        name: "expenseList",
        value: [
          ...this.state.expenseList.filter((expenseItem) => expenseItem.id !== id),
        ]
      }
    })
    // Create a pseudo event with the properties required in handleChange for "expenses" property state change
    this.handleChange({
      target: {
        validity: {valid: true},
        name: "expenses",
        value: this.state.expenses - parseFloat(amount)
      }
    })
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
                newExpenseCategory={this.state.newExpenseCategory}
                newExpenseAmount={this.state.newExpenseAmount}
                expenseList={this.state.expenseList}
                categoryList={this.state.categoryList}
                handleChange={this.handleChange}
                addExpense={this.addExpense}
                delExpense={this.delExpense}
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
