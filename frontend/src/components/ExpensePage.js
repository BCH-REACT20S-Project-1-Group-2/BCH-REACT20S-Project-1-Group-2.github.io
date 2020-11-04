import React from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";
import "../styles/ExpensePage.css";

function ExpensePage() {
  return (
    <main className="ExpensePage">
      <ExpensePresentation />
      <ExpenseList />
    </main>
  );
}

export default ExpensePage;
