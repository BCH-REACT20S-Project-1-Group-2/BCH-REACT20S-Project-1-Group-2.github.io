import React from "react";
import { InputGroup, FormControl, Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BalancePresentation from "./BalancePresentation";

function LandingPage() {
  return (
    <main className="LandingPage">
      <BalancePresentation />
      <Accordion className="mt-3" >
        <Card className="mb-3">
          <Accordion.Toggle
            as={Button}
            eventKey="0"
            className="w-100"
          >
            Update Salary
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{backgroundColor:"var(--light-color)"}}>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-3">
          <Accordion.Toggle
            as={Button}
            eventKey="1"
            className="w-100"          
          >
            Add Saving Amount
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={{backgroundColor:"var(--light-color)"}}>
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

export default LandingPage;
