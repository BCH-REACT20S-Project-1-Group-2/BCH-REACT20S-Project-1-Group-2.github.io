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
    this.props.updateTotal(this.state.userexpense.amount);
    this.props.addExpense(
      this.state.userexpense.categoryName,
      this.state.userexpense.amount
    );
    this.setState({ categoryName: "", amount: "" });
    e.target.reset();
  };

    categories: [
      { categoryid: 1, categoryName: "Rent & Mortgage" },
      { categoryid: 2, categoryName: "Groceries" },
      { categoryid: 3, categoryName: "Loan payments" },
      { categoryid: 4, categoryName: "Insurances" },
      { categoryid: 5, categoryName: "Fuel/ Transportation costs" },
      { categoryid: 6, categoryName: "Clothing & Shoes" },
      { categoryid: 7, categoryName: "Entertainment & Hobbies" },
      {
        categoryid: 8,
        categoryName: "Utility bills (cable, cell, electricity, water, etc",
      },
      { categoryid: 9, categoryName: "Health expenses" },
      { categoryid: 10, categoryName: "Services (daycare, hair dresser)" },
      { categoryid: 11, categoryName: "Miscellenous" },
    ],
  };

  render() {

    const categoriesList = this.state.categories.map((item) => {
      return <option>{item.categoryName}</option>;
    });
    const { saveButtonLabel } = require("../phrases/App.json");


    return (
      <>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Group controlId="expenseList" className="expenseform">
            <Form.Control
              as="select"
              custom
              defaultValue="Add category"
              name="categoryName"
              onChange={this.onChange.bind(this)}
              required
            >
              <option disabled>Add category</option>
              {categoriesList}
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
          <Button>{saveButtonLabel}</Button>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
