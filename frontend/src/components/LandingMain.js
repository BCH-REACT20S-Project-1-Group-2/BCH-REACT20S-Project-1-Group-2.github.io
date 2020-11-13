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
      saving: 0,
    };
  }

  saveSalary = (e) => {
    e.preventDefault();
    localStorage.setItem("totalSalary", e.target[0].value);
    this.setState({ savedSalary: e.target[0].value });
    document.getElementById("updateSalary").click();
  };

  saveSaving = (e) => {
    e.preventDefault();
    this.setState({
      saving: parseFloat(e.target[0].value),
    });
    document.getElementById("updateSaving").click();
  };

  componentDidUpdate() {
    localStorage.setItem("saving", JSON.stringify(this.state.saving));
  }

  componentDidMount() {
    let sTarget = JSON.parse(localStorage.getItem("saving"));
    sTarget
      ? this.setState({
          saving: JSON.parse(sTarget),
        })
      : this.setState({
          saving: 0,
        });
  }

  render() {
    const {
      updateSalaryLabel,
      salaryInputLabel,
      updateSavingAmoungLabel,
      savingInputLabel,
      expensePageLinkLabel,
      saveButtonLabel,
    } = require("../phrases/App.json");

    return (
      <main>
        <BalancePresentation
          salary={this.state.savedSalary}
          saving={this.state.saving}
        />
        <Accordion className="mt-3">
          <Card className="mb-3">
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              className="w-100"
              id="updateSalary"
            >
              {updateSalaryLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={this.saveSalary}>
                  <InputGroup>
                    <FormControl
                      id="inputSalary"
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
              id="updateSaving"
              eventKey="1"
              className="w-100"
            >
              {updateSavingAmoungLabel}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form onSubmit={this.saveSaving}>
                  <InputGroup>
                    <FormControl
                      id="inputSaving"
                      placeholder={savingInputLabel}
                      className="text-center"
                      type="number"
                      step=".01"
                      required
                      name="savingsAmount"
                      min="0"
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
