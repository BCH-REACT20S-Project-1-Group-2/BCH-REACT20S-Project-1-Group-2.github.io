import React from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";

const ExpenseMain = ({
  expenses,
  expenseList,
  handleChange,
  getCategoryName,
}) => {
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
        getCategoryName={getCategoryName}
      />
    </main>
  );
};

export default ExpenseMain;
