import React from "react";
import "../styles/ExpensePresentation.css";

const ExpensePresentation = (props) => {
  return (
    <div className="ExpensePresentation">
      <div>Total Expense</div>
      <div>{props.total} €</div>
    </div>
  );
};

export default ExpensePresentation;
