import React from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BalancePresentation from "./BalancePresentation";
import Footer from "./Footer";
import "../styles/LandingPage.css";

class LandingPage extends React.Component {
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
    document.getElementById("UpdateSalaryBtn").click();
  };

  saveSaving = (e) => {
    e.preventDefault();
    this.setState({
      saving: parseFloat(e.target[0].value)
    });
    document.getElementById("UpdateSavingBtn").click();
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
    } = require("../phrases/LandingPage.json");
    const { saveButtonLabel } = require("../phrases/App.json");

    return (
      <div className="LandingPage">
        <Header />
        <main>
          <BalancePresentation
            salary={this.state.savedSalary}
            saving={this.state.saving}
          />
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Button id="UpdateSalaryBtn" className="w-100 text-white">
                  {updateSalaryLabel}
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form className="form-wrapper" onSubmit={this.saveSalary}>
                    <Form.Group controlId="formSalary">
                      <Form.Label>{salaryInputLabel}</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="e.g. 3000 €"
                        step="0.01"
                        required
                        name="amount"
                        min="0.01"
                      />
                      <p>€</p>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      {saveButtonLabel}
                    </Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Button id="UpdateSavingBtn" className="w-100 text-white">
                  {updateSavingAmoungLabel}
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Form className="form-wrapper" onSubmit={this.saveSaving}>
                    <Form.Group controlId="formSavings">
                      <Form.Label>{savingInputLabel}</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="e.g. 3000 €"
                        step="1"
                        required
                        name="savingsAmount"
                        min="0"
                      />
                      <p>€</p>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      {saveButtonLabel}
                    </Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Link to="/expense">
                <Accordion.Toggle as={Card.Header}>
                  <Button className="w-100 text-white">
                    {expensePageLinkLabel}
                  </Button>
                </Accordion.Toggle>
              </Link>
            </Card>
          </Accordion>
        </main>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
