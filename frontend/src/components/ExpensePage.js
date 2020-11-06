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

  delExpense = (id) => {
    this.setState({
      userexpenses: [
        ...this.state.userexpenses.filter(
          (userexpenses) => userexpenses.id !== id
        ),
      ],
    });
  };

  addExpense = (title, amount) => {
    const newExpense = {
      id: Math.floor(Math.random() * 10000000000),
      title: title,
      amount: amount,
    };
    this.setState({
      userexpenses: [newExpense, ...this.state.userexpenses],
    });
  };

  updateTotal = (amount) => {
    this.setState({ total: this.state.total + parseFloat(amount) });
    console.log(this.state.total);
  };

  // clearFields = (title,amount) =>{
  //   this.setState({
  //     userexpense.title: '',

  //   });
  // }
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
