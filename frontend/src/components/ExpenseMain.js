import React from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";

const ExpenseMain = (props) => {
  return (
    <main>
      <ExpensePresentation
        expenses={props.expenses}
      />
      <ExpenseAdd
        expenses={props.expenses}
        expenseList={props.expenseList}
        handleChange={props.handleChange}
      />
      <ExpenseList
        expenses={props.expenses}
        expenseList={props.expenseList}
        handleChange={props.handleChange}
      />
    </main>
  );
}

export default ExpenseMain;

