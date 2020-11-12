import React from "react";
import "../styles/ExpensePresentation.css";

const ExpensePresentation = (props) => {
  const { expensesLabel } = require("../phrases/ExpensePresentation.json");
  return (
    <div className="ExpensePresentation">
      <div>{expensesLabel}</div>
      <div>{props.total} €</div>
    </div>
  );
};

export default ExpensePresentation;
