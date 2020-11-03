import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "../styles/ExpenseList.css";

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type };
  }
  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="expenseList" className="expenseform">
            <Form.Control as="select" custom defaultValue="Add category">
              <option disabled>Add category</option>
              <option>Rent</option>
              <option>Mortgage(s)</option>
              <option>Utility Bills</option>
              <option>Insurance</option>
            </Form.Control>
            <Form.Control type="number" placeholder="e.g. 100 €" step=".01" />
            <FaSave className="SaveIcon" />
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
