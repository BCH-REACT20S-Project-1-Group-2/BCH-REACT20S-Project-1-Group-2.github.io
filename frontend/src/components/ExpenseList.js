import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return props.expenseList.map((expenseItem) => (
    <ExpenseItem
      key={expenseItem.id}
      expenseItem={expenseItem}
      expenses={props.expenses}
      expenseList={props.expenseList}
      handleChange={props.handleChange}
    />
  ));
};

export default ExpenseList;
