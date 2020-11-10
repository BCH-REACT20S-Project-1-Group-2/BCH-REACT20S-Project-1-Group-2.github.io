import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class BalancePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 1,
      saving: 1,
      expenses: 1,
      balance: 1,
    };
  }
  render() {
    const {
      salaryLabel,
      savingLabel,
      expensesLabel,
      balanceLabel,
    } = require("../phrases/BalancePresentation.json");
    return (
      <Container className="px-0 pt-3 font-weight-bold">
        <Row id="salary" className="pb-1 ">
          <Col className="font-weight-bolder">
            <p>{salaryLabel}</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.salary} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>{savingLabel}</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.saving} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>{expensesLabel}</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.expenses} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>{balanceLabel}</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.balance} €</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BalancePresentation;
