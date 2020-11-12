import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class ExpensePresentation extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: "2800",
    };
  }
  render() {
    const { expensesLabel } = require("../phrases/ExpensePresentation.json");

    return (
      <Container className="px-2 pt-3 font-weight-bold">
        <Row id="expenses" className="pb-1 ">
          <Col className="font-weight-bolder">
            <p>{expensesLabel}</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.expenses} €</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ExpensePresentation;
