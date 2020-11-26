import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, expenseList, handleChange }) => {
  return expenseList.map((expenseItem) => (
    <ExpenseItem
      key={expenseItem.id}
      expenseItem={expenseItem}
      expenses={expenses}
      expenseList={expenseList}
      handleChange={handleChange}
    />
  ));
};

export default ExpenseList;
