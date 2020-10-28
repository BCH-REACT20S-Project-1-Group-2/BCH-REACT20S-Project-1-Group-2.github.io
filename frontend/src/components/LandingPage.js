import React from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BalancePresentation from "./BalancePresentation";
import Footer from "./Footer";
import "../styles/LandingPage.css";

function Landing() {
  return (
    <div className="LandingPage">
      <Header />
      <main>
        <BalancePresentation />
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Button className="w-100 text-white">Update salary</Button>
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
          <Card>
            <Link to="/expense">
              <Accordion.Toggle as={Card.Header}>Add expense</Accordion.Toggle>
            </Link>
          </Card>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
