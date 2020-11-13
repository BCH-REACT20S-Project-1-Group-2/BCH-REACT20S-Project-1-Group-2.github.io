import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return props.expenseList.map((expenseItem) => (
    <ExpenseItem
      key={expenseItem.id}
      expenseItem={expenseItem}
      delExpense={props.delExpense}
    />
  ));
};

export default ExpenseList;
