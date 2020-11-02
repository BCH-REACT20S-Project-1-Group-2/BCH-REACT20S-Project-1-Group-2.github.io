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
              <Button className="w-100 text-white">Update Salary</Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form className="form-wrapper">
                  <Form.Group controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" />
                    <p>€</p>
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <Button className="w-100 text-white">Add Saving Amount</Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form className="form-wrapper">
                  <Form.Group controlId="formSavings">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" />
                    <p>€</p>
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Link to="/expense">
              <Accordion.Toggle as={Card.Header}>
                <Button className="w-100 text-white">Add Expense</Button>
              </Accordion.Toggle>
            </Link>
          </Card>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
