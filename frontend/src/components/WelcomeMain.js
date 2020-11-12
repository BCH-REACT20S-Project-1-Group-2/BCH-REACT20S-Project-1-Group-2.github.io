import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

class WelcomeMain extends Component {
  state = {
    username: localStorage.getItem("user"),
  };

  onChangeName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    localStorage.setItem("user", this.state.username);
  };
  
  render() {
    const { welcomeText, welcomeCTA } = require("../phrases/App.json");

    return (
      <Container className="mt-5 pt-5 px-0">
        <Row>
          <Col>
            <h2 className="text-center">
              {welcomeText} {this.state.username}
            </h2>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="userName">
                <Form.Control
                  type="text"
                  placeholder="your name"
                  value={this.state.username}
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
