import React from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import BalancePresentation from "./BalancePresentation";
import Footer from "./Footer";
import "../styles/LandingPage.css";

const {
  updateSalaryLabel,
  salaryInputLabel,
  updateSavingAmoungLabel,
  savingInputLabel,
  expensePageLinkLabel,
} = require("../phrases/LandingPage.json");

const {saveButtonLabel} = require('../phrases/App.json');
class LandingPage extends React.Component {

  state = {
    saving: 0,
  }

  onChange = (event) => {
    this.setState({
      saving: event.target.value
    })
  }

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
      saving:0,
    });
  }

  render () {
    return (
      <div className="LandingPage">
        <Header />
        <main>
          <BalancePresentation saving={this.state.saving}/>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Button className="w-100 text-white">{updateSalaryLabel}</Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form className="form-wrapper">
                    <Form.Group controlId="formSalary">
                      <Form.Label>{salaryInputLabel}</Form.Label>
                      <Form.Control type="number" />
                      <p>€</p>
                    </Form.Group>
                    <Button type="submit" variant="primary">{saveButtonLabel}</Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Button className="w-100 text-white">{updateSavingAmoungLabel}</Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Form className="form-wrapper">
                    <Form.Group controlId="formSavings">
                      <Form.Label>{savingInputLabel}</Form.Label>
                      <Form.Control type="number" onChange={this.onChange.bind(this)} min="0"/>
                      <p>€</p>
                    </Form.Group>
                    <Button variant="primary" type="submit">{saveButtonLabel}</Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Link to="/expense">
                <Accordion.Toggle as={Card.Header}>
                  <Button className="w-100 text-white">{expensePageLinkLabel}</Button>
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
