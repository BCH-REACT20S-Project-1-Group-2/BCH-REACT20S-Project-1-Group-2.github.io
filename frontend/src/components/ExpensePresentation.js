import React from "react";
import "../styles/ExpensePresentation.css";

class ExpensePresentation extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: "2800"
    };
  }
  render() {
    const { expensesLabel } = require("../phrases/ExpensePresentation.json");

    return (
      <div className="ExpensePresentation">
        <div>{expensesLabel}</div>
        <div>{this.state.expenses} €</div>
      </div>
    );
  }
}

export default ExpensePresentation;
