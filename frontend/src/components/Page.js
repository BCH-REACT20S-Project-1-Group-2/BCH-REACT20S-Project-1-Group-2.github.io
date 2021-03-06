import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";

function Page({ username, children }) {
  return (
    <Container className="Page">
      <Row className="Page-header fixed-top mx-auto">
        <Header username={username} />
      </Row>
      <Row className="Page-main-area px-3">
        <Col className="p-0 pb-3">{children}</Col>
      </Row>
      <Row className="Page-footer fixed-bottom mx-auto">
        <Footer />
      </Row>
    </Container>
  );
}

export default Page;
