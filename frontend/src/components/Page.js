import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";

function Page(props) {
  return (
    <Container className="Page">
      <Row className="Page-header fixed-top mx-auto">
        <Col className="p-0">
          <Header />
        </Col>
      </Row>
      <Row className="Page-main-area px-3">
        <Col className="p-0">
          {props.children}
        </Col>
      </Row>
      <Row className="Page-footer fixed-bottom mx-auto">
        <Col className="p-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
