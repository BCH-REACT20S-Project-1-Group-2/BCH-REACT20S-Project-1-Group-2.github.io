import React from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseList from "./ExpenseList";

function ExpenseMain() {
  return (
    <main>
      <ExpensePresentation />
      <ExpenseList />
    </main>
  );
}

export default ExpenseMain;
