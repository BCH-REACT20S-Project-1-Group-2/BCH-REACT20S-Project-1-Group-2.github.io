import React from "react";
import "../styles/ExpensePresentation.css";

class ExpensePresentation extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: "2800",
    };
  }
  render() {
    return (
      <div className="ExpensePresentation">
        <div>Total Expense</div>
        <div>{this.state.expenses} €</div>
      </div>
    );
  }
}

export default ExpensePresentation;
