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
          <Col className="font-weight-bolder">
            <p>Total salary</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.salary} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>Target savings</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.saving} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>Total Expenses</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>{this.state.expenses} €</p>
          </Col>
        </Row>
        <Row className="pb-1">
          <Col className="font-weight-bolder">
            <p>Balance</p>
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
