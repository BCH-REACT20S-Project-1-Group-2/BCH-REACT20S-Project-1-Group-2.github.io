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

    let salary = localStorage.getItem("totalSalary");

    if (salary == "null" || salary == null) {
      salary = 0;
      localStorage.setItem("totalSalary", salary);
    }

    this.state = {
      salaryInput: salary,
      savedSalary: salary,
    };
  }

  saveSalary = () => {
    localStorage.setItem("totalSalary", this.state.salaryInput);
    this.setState({ savedSalary: this.state.salaryInput });
    document.getElementById("UpdateSalaryBtn").click();
  };

  handleTotalSalaryChange(event) {
    this.setState({ salaryInput: event.target.value });
  }

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
                  <Form className="form-wrapper">
                    <Form.Group controlId="formSalary">
                      <Form.Label>Salary</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={this.handleTotalSalaryChange.bind(this)}
                      />
                      <p>€</p>
                    </Form.Group>
                    <Button variant="primary" onClick={this.saveSalary.bind()}>
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
