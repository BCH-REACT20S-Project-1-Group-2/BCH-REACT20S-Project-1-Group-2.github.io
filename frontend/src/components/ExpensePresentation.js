import React from "react";
import { Table } from "react-bootstrap";

class ExpensePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: 2000,
      irregular: 800,
    };
  }
  render() {
    const { expensesLabel } = require("../phrases/ExpensePresentation.json");

    return (
      <Table>
        <tbody>
          <tr>
            <td>{expensesLabel}</td>
            <td>{this.state.fixed} €</td>
          </tr>
          <tr>
            <td>Total Irregular Expense</td>
            <td>{this.state.irregular} €</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ExpensePresentation;
