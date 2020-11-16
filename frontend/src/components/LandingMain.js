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

class LandingMain extends React.Component {
  handleSubmit = (e, i) => {
    e.preventDefault();
    this.props.handleChange(e.target[0]);
    document.getElementById(`accordion-toggle-${i}`).click();
    e.target.reset();
  };

  render() {
    const {
      updateSalaryLabel,
      salaryInputLabel,
      updateSavingLabel,
      savingInputLabel,
      expensePageLinkLabel,
      saveButtonLabel,
    } = require("../phrases/App.json");

    return (
      <main>
        <BalancePresentation
          salary={this.props.salary}
          saving={this.props.saving}
          expenses={this.props.expenses}
        />
        <Accordion className="mt-3">
          <Card className="mb-3">
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              className="w-100"
              id="accordion-toggle-0"
            >
              {updateSalaryLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={(e) => this.handleSubmit(e, 0)}>
                  <InputGroup>
                    <FormControl
                      id="inputSalary"
                      placeholder={salaryInputLabel}
                      className="text-center"
                      type="number"
                      step=".01"
                      required
                      name="salary"
                      min="0.01"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>€</InputGroup.Text>
                      <InputGroup.Text
                        as={Button}
                        id="saveSalary"
                        type="submit"
                      >
                        {saveButtonLabel}
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mb-3">
            <Accordion.Toggle
              as={Button}
              id="accordion-toggle-1"
              eventKey="1"
              className="w-100"
            >
              {updateSavingLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form onSubmit={(e) => this.handleSubmit(e, 1)}>
                  <InputGroup>
                    <FormControl
                      id="inputSaving"
                      placeholder={savingInputLabel}
                      className="text-center"
                      type="number"
                      step=".01"
                      required
                      name="saving"
                      min="0.01"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>€</InputGroup.Text>
                      <InputGroup.Text
                        as={Button}
                        id="saveSaving"
                        type="submit"
                      >
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
              <Accordion.Toggle
                as={Button}
                id="updateExpense"
                className="w-100"
              >
                {expensePageLinkLabel}
              </Accordion.Toggle>
            </Link>
          </Card>
        </Accordion>
      </main>
    );
  }
}

export default LandingMain;
