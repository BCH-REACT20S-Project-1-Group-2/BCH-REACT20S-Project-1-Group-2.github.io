import React from "react";
import { InputGroup, FormControl, Form, Button, Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

class ExpenseList extends React.Component {
  state = {
    userexpense: { categoryName: "", amount: "" },
    categories: require("../phrases/Categories.json"),
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
    this.props.addExpense(
      this.state.userexpense.categoryName,
      this.state.userexpense.amount
    );
    this.setState({ categoryName: "", amount: "" });
    e.target.reset();
  };

  render() {
    const { expenseInputLabel } = require("../phrases/ExpenseList.json");

    const categoriesList = this.state.categories.map((item) => {
      return <option value={item.categoryName}>{item.categoryName}</option>;
    });

    return (
      <Card.Body className="mt-3 p-3">
        <Form onSubmit={this.onSubmit.bind(this)}>
          <InputGroup>
            <Form.Control
              as="select"
              custom
              defaultValue="Add category"
              name="categoryName"
              onChange={this.onChange.bind(this)}
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
              name="amount"
              min="0.01"
              onChange={this.onChange.bind(this)}
              id="inputExpense"
            />

            <Button variant="primary" type="submit" id="savebutton">
              <FaSave className="SaveIcon" />
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    );
  }
}

export default ExpenseList;
