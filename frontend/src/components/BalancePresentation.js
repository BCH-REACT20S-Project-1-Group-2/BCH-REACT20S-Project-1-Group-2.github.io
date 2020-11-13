import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BalancePresentation = (props) => {
    const {
      salaryLabel,
      savingLabel,
      expensesLabel,
      balanceLabel,
    } = require("../phrases/App.json");

    return (
      <Container className="px-2 pt-3 font-weight-bold">
        <Row id="salary" className="pb-1 ">
          <Col xs={9} className="pr-0 font-weight-bolder">
            <p>{salaryLabel}</p>
          </Col>
          <Col className="pl-0 d-flex justify-content-end">
            <p>{props.salary} €</p>
          </Col>
        </Row>
        <Row id="saving" className="pb-1">
          <Col xs={9} className="pr-0 font-weight-bolder">
            <p>{savingLabel}</p>
          </Col>
          <Col className="pl-0 d-flex justify-content-end">
            <p>{props.saving} €</p>
          </Col>
        </Row>
        <Row id="expenses" className="pb-1">
          <Col className="pr-0 font-weight-bolder">
            <p>{expensesLabel}</p>
          </Col>
          <Col className="pl-0 d-flex justify-content-end">
            <p>{props.expenses} €</p>
          </Col>
        </Row>
        <Row id="balance" className="pb-1">
          <Col className="pr-0 font-weight-bolder">
            <p>{balanceLabel}</p>
          </Col>
          <Col className="pl-0 d-flex justify-content-end">
            <p>
              {props.salary - props.saving - props.expenses} €
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

export default BalancePresentation;
