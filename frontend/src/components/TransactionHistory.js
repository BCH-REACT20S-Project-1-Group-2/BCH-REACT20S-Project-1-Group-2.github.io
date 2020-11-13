import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionHistory = (props) => {
  return props.userexpenses.map((userexpense) => (
    <TransactionItem
      key={userexpense.id}
      userexpense={userexpense}
      delExpense={props.delExpense}
    />
  ));
};

export default TransactionHistory;
