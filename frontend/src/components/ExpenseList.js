import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "../styles/ExpenseList.css";

class ExpenseList extends React.Component {
  state = {
    categories: require("../phrases/Categories.json"),
  };
  render() {
    const categoriesList = this.state.categories.map((item) => {
      return <option>{item.categoryName}</option>;
    });
    const { saveButtonLabel } = require("../phrases/App.json");

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
          <Button>{saveButtonLabel}</Button>
        </Form>
      </>
    );
  }
}

export default ExpenseList;
