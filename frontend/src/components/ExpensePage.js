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

  // React Life Cycle
  componentDidMount() {
    this.total = JSON.parse(localStorage.getItem("total"));
    if (localStorage.getItem("total")) {
      this.setState({
        total: this.total,
      });
    } else {
      this.setState({
        total: 0,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("total", JSON.stringify(nextState.total));
  }

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
