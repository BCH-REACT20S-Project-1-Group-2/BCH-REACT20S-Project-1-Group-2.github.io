import React from "react";

const ExpenseItem = (props) => {
  return (
    <div>
      <div>{props.expenseItem.category}</div>
      <div>{props.expenseItem.amount}</div>
      <button
        onClick={() => {
          props.delExpense(props.expenseItem.id, props.expenseItem.amount);
        }}
      >
        x
      </button>
    </div>
  );
};

export default ExpenseItem;
