import React from "react";

class ExpenseItem extends React.Component {
  // Creates new targets for "expenseList" and "expenses":
  // - with the "target" properties required in handleChange (validity, name, and new value)
  // - without the deleted expense item in "expenseList" array or summed in "expenses"
  handleClick = (id, amount) => {
    this.props.handleChange({
      validity: { valid: true },
      name: "expenseList",
      value: [
        ...this.props.expenseList.filter(
          (expenseItem) => expenseItem.id !== id
        ),
      ],
    });
    this.props.handleChange({
      validity: { valid: true },
      name: "expenses",
      value: this.props.expenses - parseFloat(amount),
    });
  };

  render() {
    return (
      <div>
        <div>{this.props.expenseItem.category}</div>
        <div>{this.props.expenseItem.amount}</div>
        <button
          onClick={() => {
            this.handleClick(
              this.props.expenseItem.id,
              this.props.expenseItem.amount
            );
          }}
        >
          x
        </button>
      </div>
    );
  }
};

export default ExpenseItem;
