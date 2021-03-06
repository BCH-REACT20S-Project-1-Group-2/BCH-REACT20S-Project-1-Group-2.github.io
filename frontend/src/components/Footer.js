import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AppFooter from "./AppFooter";
import CustomModal from "./CustomModal";

function Footer() {
  const {
    appName,
    about,
    privacyPolicy,
    aboutText,
    privacyPolicyText,
  } = require("../phrases/App.json");
  return (
    <footer id="footer" className="p-2 d-flex justify-content-center">
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
                <CustomModal
                  id="about"
                  title="About"
                  body={about}
                  text={aboutText}
                />
              </Col>
              <Col className="d-flex justify-content-end">
                <CustomModal
                  title="Privacy Policy"
                  body={privacyPolicy}
                  text={privacyPolicyText}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h6
                  id="copyright"
                  className="d-flex justify-content-center mt-3"
                >
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
