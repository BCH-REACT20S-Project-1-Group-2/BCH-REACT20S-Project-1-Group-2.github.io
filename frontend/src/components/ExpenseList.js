import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "../styles/ExpenseList.css";

class ExpenseList extends React.Component {
  state = {
    userexpense: { categoryName: "", amount: "" },

    expenselist: [
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

  onSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.checkValidity() ||
      this.state.userexpense.categoryName === ""
    ) {
      return;
    } else {
      // this adds the transaction to transaction list
      this.props.addExpense(
        this.state.userexpense.categoryName,
        this.state.userexpense.amount
      );

      //this function is defined at expensepage and its updates total expenses
      this.props.updateTotal(this.state.userexpense.amount);

      //Clears the fields after taking input
      e.target.reset();
    }
  };

  onChange = (e) => {
    this.setState((prevState) => {
      let userexpense = Object.assign({}, prevState.userexpense);
      userexpense[e.target.name] = e.target.value;
      return { userexpense };
    });
  };

  render() {
    const expenseList = this.state.expenselist.map((item) => {
      return <option key={item.categoryid}>{item.categoryName}</option>;
    });

    return (
      <>
        <Form noValidate onSubmit={this.onSubmit.bind(this)}>
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
              {expenseList}
            </Form.Control>
            <Form.Control
              type="number"
              placeholder="e.g. 100 €"
              name="amount"
              step=".01"
              onChange={this.onChange.bind(this)}
              required
              min="0.01"
            />

            <label htmlFor="savebutton">
              <FaSave className="SaveIcon" />
            </label>
            <Button variant="primary" type="submit" id="savebutton"></Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
