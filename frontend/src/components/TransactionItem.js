import React from "react";

const TransactionItem = (props) => {
  return (
    <div>
      <div>
        <div>{props.userexpense.title}</div>
        <div>{props.userexpense.amount}</div>
        <button
          onClick={() => {
            props.delExpense(props.userexpense.id, props.userexpense.amount);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
