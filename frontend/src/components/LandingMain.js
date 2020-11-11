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
  constructor(props) {
    super(props);

    let salary = JSON.parse(localStorage.getItem("totalSalary"));

    if (salary == null) {
      salary = 0;
      localStorage.setItem("totalSalary", salary);
    }

    this.state = {
      savedSalary: salary,
    };
  }

  saveSalary = (e) => {
    e.preventDefault();
    localStorage.setItem("totalSalary", e.target[0].value);
    this.setState({ savedSalary: e.target[0].value });
    document.getElementById("UpdateSalaryBtn").click();
  };
  getBalance = () => {
    let userExpenses =
      localStorage.getItem("userexpenses") === null
        ? 0
        : JSON.parse(localStorage.getItem("userexpenses"));

    let userSaving =
      localStorage.getItem("saving") === null
        ? 0
        : JSON.parse(localStorage.getItem("saving"));

    return this.state.savedSalary - userExpenses - userSaving;
  };

  render() {
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
        <BalancePresentation
          salary={this.state.savedSalary}
          balance={this.getBalance()}
        />
        <Accordion className="mt-3">
          <Card className="mb-3">
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              className="w-100"
              id="UpdateSalaryBtn"
            >
              {updateSalaryLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={this.saveSalary}>
                  <InputGroup>
                    <FormControl
                      placeholder={salaryInputLabel}
                      className="text-center"
                      type="number"
                      step=".01"
                      required
                      name="amount"
                      min="0.01"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>€</InputGroup.Text>
                      <InputGroup.Text as={Button} type="submit">
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
}

export default LandingMain;
