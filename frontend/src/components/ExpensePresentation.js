import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ExpensePresentation = (props) => {
  const { expensesLabel } = require("../phrases/ExpensePresentation.json");
  return (
    <Container className="px-2 pt-3 font-weight-bold">
      <Row className="pb-1 ">
        <Col className="font-weight-bolder">
          <p>{expensesLabel}</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <p>{props.total} €</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpensePresentation;
