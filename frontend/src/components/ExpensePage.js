import React, { Component } from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import Footer from "./Footer";
import TransactionHistory from "./TransactionHistory";
import "../styles/ExpensePage.css";

export class ExpensePage extends Component {
  state = {
    userexpenses: [],
    total: 0,
  };

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

  updateTotal = (amount) => {
    this.setState({ total: this.state.total + parseFloat(amount) });
  };

  // React Life Cycle
  componentDidMount() {
    if (localStorage.getItem("userexpenses")) {
      console.log("inside then loop");
      const items = JSON.parse(localStorage.getItem("userexpenses"));

      const newExpense = items.map((obj) => ({
        id: obj.id,
        title: obj.title,
        amount: parseFloat(obj.amount),
      }));

      this.setState({
        userexpenses: [...newExpense],
      });

      //Function to change total state as per the userexpense state

      var totalexpensesarray = [];
      newExpense.forEach((item) => {
        totalexpensesarray.push(item.amount);
      });
      const totalexpenses = totalexpensesarray.reduce((a, b) => a + b, 0);

      this.setState({ total: totalexpenses });
    } else {
      this.setState({ userexpenses: [] }, { total: 0 });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "userexpenses",
      JSON.stringify(nextState.userexpenses)
    );
    localStorage.setItem("total", JSON.stringify(nextState.total));
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
