import React from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BalancePresentation from "./BalancePresentation";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <BalancePresentation />
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Update salary
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Add saving amount
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSavings">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Link to="/expense">
          <Button variant="primary">Add expense</Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
