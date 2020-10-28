import React from "react";
import { Table } from "react-bootstrap";

class BalancePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 5000,
      saving: 1000,
      expenses: 2800,
      balance: 1200,
    };
  }
  render() {
    const {
      salaryLabel,
      savingLabel,
      expensesLabel,
      balanceLabel,
    } = require("../phrases/BalancePresentation.json");
    return (
      <Table>
        <tbody>
          <tr>
            <td>{salaryLabel}</td>
            <td>{this.state.salary} €</td>
          </tr>
          <tr>
            <td>{savingLabel}</td>
            <td>{this.state.saving} €</td>
          </tr>
          <tr>
            <td>{expensesLabel}</td>
            <td>{this.state.expenses} €</td>
          </tr>
          <tr>
            <td>{balanceLabel}</td>
            <td>{this.state.balance} €</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BalancePresentation;
