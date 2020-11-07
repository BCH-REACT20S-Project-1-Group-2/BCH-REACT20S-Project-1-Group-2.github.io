import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function AppFooter() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Link to="/landing">
            <FaTachometerAlt />
          </Link>
        </Col>
        <Col>
          <Link to="/landing">
            <FaChartBar />
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <FaSignOutAlt />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default AppFooter;
