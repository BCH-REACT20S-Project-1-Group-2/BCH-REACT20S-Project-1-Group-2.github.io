import React from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";

const ExpenseMain = ({ expenses, expenseList, handleChange }) => {
  return (
    <main>
      <ExpensePresentation expenses={expenses} />
      <ExpenseAdd
        expenses={expenses}
        expenseList={expenseList}
        handleChange={handleChange}
      />
      <ExpenseList
        expenses={expenses}
        expenseList={expenseList}
        handleChange={handleChange}
      />
    </main>
  );
};

export default ExpenseMain;
