import React, { Component } from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import TransactionHistory from "./TransactionHistory";
import Footer from "./Footer";

import "../styles/ExpensePage.css";

export class ExpensePage extends Component {
  state = {
    userexpenses: [],
    total: 0,
  };

  // This will update the state of userexpenses after a transaction is added.
  addExpense = (title, amount) => {
    const newExpense = {
      id: Math.floor(Math.random() * 10000000000),
      title: title,
      amount: parseFloat(amount),
    };
    this.setState({
      userexpenses: [newExpense, ...this.state.userexpenses],
    });
  };

  // This will update the state of userexpenses and total after a transaction is removed.
  delExpense = (id, amt) => {
    this.setState({
      userexpenses: [
        ...this.state.userexpenses.filter(
          (userexpenses) => userexpenses.id !== id
        ),
      ],
    });
    this.setState({
      total: this.state.total - parseFloat(amt),
    });
  };

  //This will calculate the total when a transaction is added.
  updateTotal = (amount) => {
    this.setState((state) => ({ total: state.total + parseFloat(amount) }));
  };

  // React Life Cycle
  componentDidMount() {
    if (localStorage.getItem("userexpenses")) {
      const items = JSON.parse(localStorage.getItem("userexpenses"));
      const fetchExpense = items.map((obj) => ({
        id: obj.id,
        title: obj.title,
        amount: parseFloat(obj.amount),
      }));
      this.setState({
        userexpenses: [...fetchExpense],
      });

      //To update total expense amount on start
      var totalexpensesarray = [];
      fetchExpense.forEach((item) => {
        totalexpensesarray.push(item.amount);
      });
      const totalexpenses = totalexpensesarray.reduce((a, b) => a + b, 0);

      this.setState({ total: totalexpenses });
    } else {
      this.setState({ userexpenses: [] }, { total: 0 });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "userexpenses",
      JSON.stringify(this.state.userexpenses)
    );
    localStorage.setItem("total", JSON.stringify(this.state.total));
  }

  render() {
    return (
      <div className="ExpensePage">
        <Header />
        <main>
          <ExpensePresentation total={this.state.total} />
          <ExpenseList
            addExpense={this.addExpense}
            updateTotal={this.updateTotal}
          />
          <TransactionHistory
            userexpenses={this.state.userexpenses}
            delExpense={this.delExpense}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ExpensePage;
