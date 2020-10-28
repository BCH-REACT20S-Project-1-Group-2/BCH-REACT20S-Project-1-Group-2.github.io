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
    return (
      <Table>
        <tbody>
          <tr>
            <td>Total salary</td>
            <td>{this.state.salary} €</td>
          </tr>
          <tr>
            <td>Target saving amount</td>
            <td>{this.state.saving} €</td>
          </tr>
          <tr>
            <td>Total expenses</td>
            <td>{this.state.expenses} €</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>{this.state.balance} €</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BalancePresentation;
