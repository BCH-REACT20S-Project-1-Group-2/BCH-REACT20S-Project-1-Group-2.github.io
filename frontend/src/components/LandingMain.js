import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Accordion,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import BalancePresentation from "./BalancePresentation";

function LandingMain() {
  return (
    <main>
      <BalancePresentation />
      <Accordion className="mt-3">
        <Card className="mb-3">
          <Accordion.Toggle as={Button} eventKey="0" className="w-100">
            Update Salary
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <InputGroup>
                  <FormControl
                    placeholder="Salary"
                    className="text-center"
                    type="number"
                    step=".01"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>€</InputGroup.Text>
                    <InputGroup.Text as={Button}>Save</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-3">
          <Accordion.Toggle as={Button} eventKey="1" className="w-100">
            Add Saving Amount
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Form>
                <InputGroup>
                  <FormControl
                    placeholder="Amount"
                    className="text-center"
                    type="number"
                    step=".01"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>€</InputGroup.Text>
                    <InputGroup.Text as={Button}>Save</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-3">
          <Link to="/expense">
            <Accordion.Toggle as={Button} className="w-100">
              Add Expense
            </Accordion.Toggle>
          </Link>
        </Card>
      </Accordion>
    </main>
  );
}

export default LandingMain;
