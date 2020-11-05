import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class BalancePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 5000,
      saving: 1000,
      expenses: 2800,
      balance: 1200,
    };
  }
  render() {
    return (
      <Container className="px-0 pt-3 font-weight-bold">
        <Row className="pb-1 ">
          <Col className="font-weight-bolder">Total salary</Col>
          <Col className="d-flex justify-content-end">
            {this.state.salary} €
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">Target savings</Col>
          <Col className="d-flex justify-content-end">
            {this.state.saving} €
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">Total Expenses</Col>
          <Col className="d-flex justify-content-end">
            {this.state.expenses} €
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">Balance</Col>
          <Col className="d-flex justify-content-end">
            {this.state.balance} €
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BalancePresentation;
