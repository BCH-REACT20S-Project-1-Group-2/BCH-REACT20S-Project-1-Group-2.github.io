import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  expenseList,
  handleChange,
  getCategoryName,
}) => {
  return expenseList.map((expenseItem) => (
    <ExpenseItem
      key={expenseItem.id}
      expenseItem={expenseItem}
      expenses={expenses}
      expenseList={expenseList}
      handleChange={handleChange}
      getCategoryName={getCategoryName}
    />
  ));
};

export default ExpenseList;
