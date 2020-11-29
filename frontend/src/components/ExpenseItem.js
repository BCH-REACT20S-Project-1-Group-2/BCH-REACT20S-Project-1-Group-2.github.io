import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

class ExpenseItem extends React.Component {
  // Creates new targets for "expenseList" and "expenses":
  // - with the "target" properties required in handleChange (validity, name, and new value)
  // - without the deleted expense item in "expenseList" array or summed in "expenses"
  handleClick = (id, amount) => {
    this.props.handleChange({
      validity: { valid: true },
      name: "expenseList",
      value: [
        ...this.props.expenseList.filter(
          (expenseItem) => expenseItem.id !== id
        ),
      ],
    });
    this.props.handleChange({
      validity: { valid: true },
      name: "expenses",
      value: this.props.expenses - parseFloat(amount),
    });
  };

  render() {
    const { expenseItem } = this.props;

    const getCategoryName = (id) => {
      const categories = require("../phrases/Categories.json").find(
        (el) => el.categoryId === Number(id)
      );
      return categories["categoryName"]; // returns the name of category from CategoryId
    };

    return (
      <Container as={Card.Body} className="p-2 mt-2 transactionContainer ">
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs={7} className="pr-0">
            <p>{getCategoryName(expenseItem.category)}</p>
          </Col>
          <Col className="px-0 d-flex justify-content-end">
            <p>{expenseItem.amount} €</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => {
                this.handleClick(expenseItem.id, expenseItem.amount);
              }}
            >
              <FaRegTrashAlt />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ExpenseItem;
