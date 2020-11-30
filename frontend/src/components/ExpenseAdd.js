import React from "react";
import { InputGroup, FormControl, Form, Button, Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

class ExpenseAdd extends React.Component {
  // Creates new targets for "expenseList" and "expenses":
  // - with the "target" properties required in handleChange (validity, name, and new value)
  // - with a new expense item added in to the "expenseList" array or summed in "expenses"
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleChange({
      validity: { valid: true },
      name: "expenseList",
      value: [
        {
          id: this.props.expenseList.length,
          category: e.target[0].value,
          amount: (Math.floor(e.target[1].valueAsNumber*100)/100),
        },
        ...this.props.expenseList,
      ],
    });
    this.props.handleChange({
      validity: { valid: true },
      name: "expenses",
      value: (Math.floor((this.props.expenses)*100)/100) + (Math.floor(e.target[1].valueAsNumber*100)/100),
    });

    e.target.reset();
  };

  render() {
    const { expenseInputLabel } = require("../phrases/App.json");
    const categoriesList = require("../phrases/Categories.json").map(
      (category) => {
        return (
          <option key={category.id} value={category.categoryName}>
            {category.categoryName}
          </option>
        );
      }
    );

    return (
      <Card.Body className="mt-3 p-3">
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Form.Control
              as="select"
              defaultValue="Add category"
              required
              id="inputCategory"
              style={{ width: "52px" }} // FIXME
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
              min="0.01"
              id="inputExpense"
            />
            <Button type="submit" id="savebutton">
              <FaSave className="SaveIcon" />
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    );
  }
}

export default ExpenseAdd;
