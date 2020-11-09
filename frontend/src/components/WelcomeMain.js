import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function WelcomeMain() {
  const { welcomeText, welcomeCTA } = require("../phrases/App.json");

  return (
    <Container className="mt-5 pt-5 px-0">
      <Row>
        <Col>
          <h2 className="text-center">{welcomeText}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mt-5">
            <FormControl placeholder="your name" className="text-center" />
          </InputGroup>
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
    </Container>
  );
}

export default WelcomeMain;
