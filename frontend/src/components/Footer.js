import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AppFooter from "./AppFooter";
import CustomModal from "./CustomModal";

function Footer() {
  const { about, privacyPolicy } = require("../phrases/Footer.json");
  const { appName } = require("../phrases/App.json");
  return (
    <footer className="p-2 d-flex justify-content-center">
      <Container>
        <Switch>
          <Route path="/landing">
            <AppFooter />
          </Route>
          <Route path="/expense">
            <AppFooter />
          </Route>
          <Route path="/">
            <Row>
              <Col>
                <CustomModal title="About" body={about} />
              </Col>
              <Col className="d-flex justify-content-end">
                <CustomModal title="Privacy Policy" body={privacyPolicy} />
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="d-flex justify-content-center mt-3">
                  Copyright &copy; {appName}
                </h6>
              </Col>
            </Row>
          </Route>
        </Switch>
      </Container>
    </footer>
  );
}

export default Footer;
