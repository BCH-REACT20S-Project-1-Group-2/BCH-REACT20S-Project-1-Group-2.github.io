import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";

function Page(props) {
  return (
    <Container
      className="Page"
      style={{
        minWidth: "375px",
        width: "375px",
        minHeight: "100vh",
      }}
    >
      <Row
        className="fixed-top mx-auto"
        style={{
          minWidth: "375px",
          width: "375px",
        }}
      >
        <Col className="p-0">
          <Header />
        </Col>
      </Row>
      <Row
        className="main-area px-3"
        style={{
          marginTop: "155px",
          minHeight: "657px",
          height: "calc(100vh - 155px - 78px)",
          background: "var(--primary-bg-color)",
        }}
      >
        <Col className="p-0">{props.children}</Col>
      </Row>
      <Row className="fixed-bottom mx-auto" style={{ width: "375px" }}>
        <Col className="p-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
