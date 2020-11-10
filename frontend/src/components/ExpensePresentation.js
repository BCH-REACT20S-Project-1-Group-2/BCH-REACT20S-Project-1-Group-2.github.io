import React from "react";
import "../styles/ExpensePresentation.css";

class ExpensePresentation extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="ExpensePresentation">
        <div>Total Expense</div>
        <div>{this.props.total} €</div>
      </div>
    );
  }
}

export default ExpensePresentation;
