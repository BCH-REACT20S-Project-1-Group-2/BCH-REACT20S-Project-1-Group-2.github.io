import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

class WelcomeMain extends Component {
  state = {
    username: "",
  };
  onChangeName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    localStorage.setItem("user", this.state.username);
  };

  onSubmit = (e) => {
    this.setState({
      username: "",
    });
  };

  render() {
    const { welcomeText, welcomeCTA, appName } = require("../phrases/App.json");

    return (
      <Container className="mt-5 pt-5 px-0">
        <Row>
          <Col>
            <h2 className="text-center">{welcomeText}</h2>
            <h1 className="text-center">{appName}</h1>
          </Col>
        </Row>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="userName">
                <Form.Control
                  type="text"
                  placeholder="your name"
                  className="text-center"
                  onChange={this.onChangeName}
                  name="username"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/landing">
                <Button
                  onClick={this.handleLogin}
                  id="welcomeCTA"
                  className="w-100 text-white mt-5"
                >
                  {welcomeCTA}
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default WelcomeMain;
