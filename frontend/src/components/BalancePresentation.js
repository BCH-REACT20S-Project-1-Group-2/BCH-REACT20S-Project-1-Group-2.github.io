import React from "react";
//import { Table } from "react-bootstrap";
import "../styles/BalancePresentation.css";

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
    return (
      <table className="balance-display">
        <tbody>
          <tr>
            <td>Total salary</td>
            <td>{this.state.salary} €</td>
          </tr>
          <tr>
            <td>Target savings</td>
            <td>{this.state.saving} €</td>
          </tr>
          <tr>
            <td>Total Expenses</td>
            <td>{this.state.expenses} €</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>{this.state.balance} €</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BalancePresentation;
