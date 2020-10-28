import React from "react";
import { Form, Button } from "react-bootstrap";

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type };
  }
  render() {
    const { saveButtonLabel } = require("../phrases/App.json");

    return (
      <>
        <Form>
          <Form.Group controlId="expenseList">
            <Form.Control as="select" custom defaultValue="Add category">
              <option disabled>Add category</option>
              <option>Rent</option>
              <option>Mortgage(s)</option>
              <option>Utility Bills</option>
              <option>Insurance</option>
            </Form.Control>
            <Form.Control type="number" placeholder="e.g. 100 €" step=".01" />
          </Form.Group>
          <Button variant="primary">{saveButtonLabel}</Button>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
