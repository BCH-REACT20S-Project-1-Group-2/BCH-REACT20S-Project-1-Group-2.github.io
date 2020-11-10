import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function AppFooter() {
  return (
    <Container className="p-2 text-center">
      <Row>
        <Col>
          <Link to="/landing">
            <FaTachometerAlt />
          </Link>
        </Col>
        <Col className="border-left border-right">
          <Link to="/analysis">
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
