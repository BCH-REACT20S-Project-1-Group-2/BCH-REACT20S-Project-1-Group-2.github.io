import React from "react";
import { InputGroup, FormControl, Form, Button, Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

class ExpenseAdd extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(
      this.props.newExpenseCategory,
      this.props.newExpenseAmount
    );
    e.target.reset();
  };

  render() {
    const { expenseInputLabel } = require("../phrases/App.json");
    const categoriesList = this.props.categoryList.map((category) => {
      return (
        <option value={category.categoryName}>{category.categoryName}</option>
      );
    });

    return (
      <Card.Body className="mt-3 p-3">
        <Form onSubmit={this.onSubmit}>
          <InputGroup>
            <Form.Control
              as="select"
              defaultValue="Add category"
              name="newExpenseCategory"
              onChange={this.props.handleChange}
              required
              id="inputCategory"
            >
              <option value="">Add category</option>
              {categoriesList}
            </Form.Control>
            <FormControl
              placeholder={expenseInputLabel}
              className="text-center"
              type="number"
              step=".01"
              required
              name="newExpenseAmount"
              min="0.01"
              onChange={this.props.handleChange}
              id="inputExpense"
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit" id="savebutton">
                <FaSave className="SaveIcon" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Card.Body>
    );
  }
}

export default ExpenseAdd;
