import React from "react";
import { InputGroup, FormControl, Form, Button, Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

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
    const { expenseInputLabel } = require("../phrases/ExpenseList.json");
    const { saveButtonLabel } = require("../phrases/App.json");
    const categoriesList = this.state.categories.map((item) => {
      return <option>{item.categoryName}</option>;
    });

    return (
      <Card.Body className="mt-3 p-3">
        <Form>
          <InputGroup>
            <Form.Control as="select" custom defaultValue="Add category">
              <option disabled>Add category</option>
              {categoriesList}
            </Form.Control>
            <FormControl
              placeholder={expenseInputLabel}
              className="text-center"
              type="number"
              step=".01"
            />
            <InputGroup.Append>
              <InputGroup.Text as={Button}>
                <FaSave />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Card.Body>
    );
  }
}

export default ExpenseList;
