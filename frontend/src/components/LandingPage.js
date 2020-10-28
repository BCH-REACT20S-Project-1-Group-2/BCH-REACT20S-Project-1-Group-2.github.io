import React from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BalancePresentation from "./BalancePresentation";
import Footer from "./Footer";

function Landing() {
  const {
    updateSalaryLabel,
    salaryInputLabel,
    updateSavingAmoungLabel,
    savingInputLabel,
    expensePageLinkLabel,
  } = require("../phrases/LandingPage.json");
  const {saveButtonLabel} = require('../phrases/App.json')
  return (
    <>
      <Header />
      <main>
        <BalancePresentation />
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {updateSalaryLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSalary">
                    <Form.Label>{salaryInputLabel}</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">{saveButtonLabel}</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              {updateSavingAmoungLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSavings">
                    <Form.Label>{savingInputLabel}</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">{saveButtonLabel}</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Link  to="/expense">
            <Accordion.Toggle as={Card.Header}>
              {expensePageLinkLabel}
            </Accordion.Toggle>
            </Link>
          </Card>
        </Accordion>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
