import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "../styles/ExpenseList.css";

class ExpenseList extends React.Component {
  state = {
    userexpense: { categoryName: "", amount: "" },
  };

  onChange = (e) => {
    // this changes the state of userexpenses amount.
    this.setState((prevState) => {
      let userexpense = Object.assign({}, prevState.userexpense);
      userexpense[e.target.name] = e.target.value;
      return { userexpense };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      this.props.updateTotal(this.state.userexpense.amount);
      e.target.reset();
    }
  };

  render() {
    return (
      <>
        <Form noValidate onSubmit={this.onSubmit} className="expenseform">
          <Form.Group controlId="expenseList" className="expenseform">
            <Form.Control
              as="select"
              custom
              defaultValue="Add category"
              required
            >
              <option disabled>Add category</option>
              <option>Rent</option>
              <option>Mortgage(s)</option>
              <option>Utility Bills</option>
              <option>Insurance</option>
            </Form.Control>
            <Form.Control
              type="number"
              placeholder="e.g. 100 €"
              step=".01"
              required
              name="amount"
              min="0.01"
              onChange={this.onChange.bind(this)}
            />

            <Button variant="primary" type="submit" id="savebutton">
              <FaSave className="SaveIcon" />
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
