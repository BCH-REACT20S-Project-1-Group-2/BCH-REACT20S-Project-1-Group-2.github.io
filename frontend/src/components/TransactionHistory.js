import React, { Component } from "react";
import TransactionItem from "./TransactionItem";
import PropTypes from "prop-types";

export class TransactionHistory extends Component {
  render() {
    return this.props.userexpenses.map((userexpense) => (
      <TransactionItem
        key={userexpense.id}
        userexpense={userexpense}
        delExpense={this.props.delExpense}
      />
    ));
  }
}

//Prop-types

TransactionHistory.propTypes = {
  userexpenses: PropTypes.array.isRequired,
};
export default TransactionHistory;
