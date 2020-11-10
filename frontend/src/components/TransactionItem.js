import React from "react";

const TransactionItem = (props) => {
  return (
    <div>
      <div className="transaction">
        <div>{props.userexpense.title}</div>
        <div>{props.userexpense.amount}</div>
        <button
          className="delBtnStyle"
          onClick={props.delExpense.bind(
            this,
            props.userexpense.id,
            props.userexpense.amount
          )}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
