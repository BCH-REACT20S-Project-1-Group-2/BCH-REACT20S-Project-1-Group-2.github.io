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
    this.setState((state) => ({
      userexpenses: [newExpense, ...state.userexpenses],
    }));
    this.setState((state) => ({
      total: state.total + parseFloat(amount),
    }));
  };

  // This will update the state of userexpenses and total after a transaction is removed.
  delExpense = (id, amt) => {
    this.setState((state) => ({
      userexpenses: [
        ...state.userexpenses.filter((userexpenses) => userexpenses.id !== id),
      ],
    }));
    this.setState((state) => ({
      total: state.total - parseFloat(amt),
    }));
  };

  // React Life Cycle
  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("userexpenses"));
    if (items) {
      const fetchExpense = items.map((obj) => ({
        id: obj.id,
        title: obj.title,
        amount: parseFloat(obj.amount),
      }));
      this.setState({ userexpenses: [...fetchExpense] });

      //To update total expense amount on start
      let totalexpensesarray = [];
      fetchExpense.forEach((item) => {
        totalexpensesarray.push(item.amount);
      });
      const totalexpenses = totalexpensesarray.reduce((a, b) => a + b, 0);

      this.setState({ total: totalexpenses });
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
          <ExpenseList addExpense={this.addExpense} />
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
