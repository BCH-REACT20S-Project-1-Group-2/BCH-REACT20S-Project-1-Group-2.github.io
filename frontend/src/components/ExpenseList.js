import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "../styles/ExpenseList.css";

class ExpenseList extends React.Component {
  state = {
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

    return (
      <>
        <Form className="expenseform">
          <Form.Group controlId="expenseList" className="expenseform">
            <Form.Control as="select" custom defaultValue="Add category">
              <option disabled>Add category</option>
              {categoriesList}
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
