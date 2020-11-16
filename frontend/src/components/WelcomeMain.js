import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const WelcomeMain = (props) => {
    const { welcomeText, welcomeCTA, appName } = require("../phrases/App.json");
    
    return (
      <main>
        <Container className="mt-5 pt-5 px-0">
          <Row>
            <Col>
              <h2 id="welcomeText" className="text-center">
                {welcomeText}
              </h2>
              <h1 id="appName" className="text-center">
                {appName}
              </h1>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    id="username"
                    type="text"
                    placeholder="your name"
                    value={props.username}
                    className="text-center"
                    onChange={(e) => props.handleChange(e.target)}
                    name="username"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/landing">
                  <Button id="welcomeCTA" className="w-100 text-white mt-5">
                    {welcomeCTA}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    );
  }

export default WelcomeMain
