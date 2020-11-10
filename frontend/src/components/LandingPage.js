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
    };
  }

  saveSalary = (e) => {
    e.preventDefault();
    localStorage.setItem("totalSalary", e.target[0].value);
    this.setState({ savedSalary: e.target[0].value });
    document.getElementById("UpdateSalaryBtn").click();
  };

  render() {
    return (
      <div className="LandingPage">
        <Header />
        <main>
          <BalancePresentation salary={this.state.savedSalary} />
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Button id="UpdateSalaryBtn" className="w-100 text-white">
                  Update Salary
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form className="form-wrapper" onSubmit={this.saveSalary}>
                    <Form.Group controlId="formSalary">
                      <Form.Label>Salary</Form.Label>
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
                      Save
                    </Button>
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
}

export default LandingPage;
