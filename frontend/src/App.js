import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Form,
  Button,
  Modal,
  Accordion,
  Card,
  Tabs,
  Tab,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/expense">
            <Expense />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Welcome() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome Text</h2>
        <Form>
          <Form.Group controlId="formUserName">
            <Form.Control type="text" placeholder="your name" />
          </Form.Group>
          <Link to="/landing">
            <Button variant="primary">Let's begin</Button>
          </Link>
        </Form>
      </main>
      <Footer />
    </div>
  );
}

function Landing() {
  return (
    <div>
      <Header />
      <main>
        <BalancePresentation />
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Update salary
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Add saving amount
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formSavings">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" /> €
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Link to="/expense">
          <Button variant="primary">Add expense</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function Expense() {
  return (
    <div>
      <Header />
      <ExpensePresentation />
      <Tabs defaultActiveKey="fixed" id="uncontrolled-tab-example">
        <Tab eventKey="fixed" title="Fixed Expense">
          <ExpenseList name="fixedExpenses" />
        </Tab>
        <Tab eventKey="irregular" title="Irregular Expense">
          <ExpenseList name="irregularExpenses" />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  render() {
    return (
      <div>
        This is the {this.state.name} expense list
        <Form>
          <Form.Group controlId="expenseList">
            <Form.Control as="select" custom>
              <option disabled selected>
                Add category
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Form.Control type="number" placeholder="e.g. 100 €" step=".01" />
          </Form.Group>
          <Button variant="primary">Save</Button>
        </Form>
      </div>
    );
  }
}

function Header() {
  return (
    <header>
      <Switch>
        <Route path="/landing">
          <div>Logo</div>
          <div>User</div>
        </Route>
        <Route path="/expense">
          <div>Logo</div>
          <div>User</div>
        </Route>
        <Route path="/">
          <div>Logo</div>
        </Route>
      </Switch>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <Switch>
        <Route path="/landing">
          <AppFooter />
        </Route>
        <Route path="/expense">
          <AppFooter />
        </Route>
        <Route path="/">
          <CustomModal title="About" body="About lorem ipsum" />
          <CustomModal
            title="Privacy Policy"
            body="Privacy policy lorem ipsum"
          />
          Copyright
        </Route>
      </Switch>
    </footer>
  );
}

function AppFooter() {
  return (
    <div>
      <Link to="/landing">
        <div>Icon 1: dashboard/landing</div>
      </Link>
      <Link to="/landing">
        <div>Icon 2: analysis (to be added in MVP+)</div>
      </Link>
      <Link to="/">
        <div>Icon 3: logout</div>
      </Link>
    </div>
  );
}

function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>{props.title}</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function BalancePresentation() {
  return (
    <div>
      <tbody>
        <tr>
          <td>Total salary</td>
          <td>5 000 €</td>
        </tr>
        <tr>
          <td>Target saving amount</td>
          <td>1 000 €</td>
        </tr>
        <tr>
          <td>Total expenses</td>
          <td>2 800 €</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>1 200 €</td>
        </tr>
      </tbody>
    </div>
  );
}

function ExpensePresentation() {
  return (
    <div>
      <tbody>
        <tr>
          <td>Total Fixed Expense</td>
          <td>1 000 €</td>
        </tr>
        <tr>
          <td>Total Irregular Expense</td>
          <td>1 000 €</td>
        </tr>
      </tbody>
    </div>
  );
}

export default App;
