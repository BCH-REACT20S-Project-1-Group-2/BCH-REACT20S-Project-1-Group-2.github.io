import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AppFooter from "./AppFooter";
import CustomModal from "./CustomModal";

function Footer() {
  return (
    <footer
      className="p-2"
      style={{
        height: "78px",
        display: "flex",
        alignItems: "center",
      }}
    >
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
                  <CustomModal title="About" body="About lorem ipsum" />
              </Col>
              <Col className="d-flex justify-content-end">
                  <CustomModal
                    title="Privacy Policy"
                    body="Privacy policy lorem ipsum"
                  />
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="d-flex justify-content-center mt-3">
                  Copyright &copy; BudgetCrtl 2020
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
