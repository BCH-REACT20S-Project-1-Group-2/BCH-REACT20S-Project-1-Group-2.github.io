import React from "react";
import "../styles/Expenses.css";

class ExpensePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: 2800,
    };
  }
  render() {
    return (
      <div className="expPres">
        <div>Total Expense</div>
        <div>{this.state.expenses}</div>
      </div>
    );
  }
}

export default ExpensePresentation;
