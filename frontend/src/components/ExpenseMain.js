import React, { Component } from "react";
import ExpensePresentation from "./ExpensePresentation";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";

export class ExpenseMain extends Component {
  render() {
    return (
      <main>
        <ExpensePresentation
          expenses={this.props.expenses}
        />
        <ExpenseAdd
          newExpenseCategory={this.props.newExpenseCategory}
          newExpenseAmount={this.props.newExpenseAmount}
          expenseList={this.props.expenseList}
          categoryList={this.props.categoryList}
          addExpense={this.props.addExpense}
          handleChange={this.props.handleChange}
        />
        <ExpenseList
          expenseList={this.props.expenseList}
          delExpense={this.props.delExpense}
        />
      </main>
    );
  }
}

export default ExpenseMain;

