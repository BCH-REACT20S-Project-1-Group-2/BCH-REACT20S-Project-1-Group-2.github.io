import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ExpensePresentation = ({ expenses }) => {
  const { expensesLabel } = require("../phrases/App.json");
  return (
    <Container className="px-2 pt-3 font-weight-bold">
      <Row id="expenses" className="pb-1 ">
        <Col className="font-weight-bolder">
          <p>{expensesLabel}</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <p>{expenses} €</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpensePresentation;
