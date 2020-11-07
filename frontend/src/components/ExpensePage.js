import React, { Component } from "react";
import Header from "./Header";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import Footer from "./Footer";

import "../styles/ExpensePage.css";

export class ExpensePage extends Component {
  state = {
    total: 0,
  };

  updateTotal = (amount) => {
    this.setState({ total: this.state.total + parseFloat(amount) });
  };

  render() {
    return (
      <div className="ExpensePage">
        <Header />
        <main>
          <ExpensePresentation total={this.state.total} />
          <ExpenseList updateTotal={this.updateTotal} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ExpensePage;
