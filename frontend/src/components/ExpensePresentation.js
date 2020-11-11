import React from "react";
import "../styles/ExpensePresentation.css";

class ExpensePresentation extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { expensesLabel } = require("../phrases/ExpensePresentation.json");

    return (
      <div className="ExpensePresentation">
        <div>{expensesLabel}</div>
        <div>{this.props.total} €</div>
      </div>
    );
  }
}

export default ExpensePresentation;
