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
  const {
    updateSalaryLabel,
    salaryInputLabel,
    updateSavingAmoungLabel,
    savingInputLabel,
    expensePageLinkLabel,
  } = require("../phrases/LandingPage.json");
  const { saveButtonLabel } = require("../phrases/App.json");

  return (
    <main>
      <BalancePresentation />
      <Accordion className="mt-3">
        <Card className="mb-3">
          <Accordion.Toggle as={Button} eventKey="0" className="w-100">
            {updateSalaryLabel}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <InputGroup>
                  <FormControl
                    placeholder={salaryInputLabel}
                    className="text-center"
                    type="number"
                    step=".01"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>€</InputGroup.Text>
                    <InputGroup.Text as={Button}>
                      {saveButtonLabel}
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-3">
          <Accordion.Toggle as={Button} eventKey="1" className="w-100">
            {updateSavingAmoungLabel}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Form>
                <InputGroup>
                  <FormControl
                    placeholder={savingInputLabel}
                    className="text-center"
                    type="number"
                    step=".01"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>€</InputGroup.Text>
                    <InputGroup.Text as={Button}>
                      {saveButtonLabel}
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="mb-3">
          <Link to="/expense">
            <Accordion.Toggle as={Button} className="w-100">
              {expensePageLinkLabel}
            </Accordion.Toggle>
          </Link>
        </Card>
      </Accordion>
    </main>
  );
}

export default LandingMain;
