import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {FaUserEdit} from 'react-icons/fa';
import "../styles/AppHeader.css";

function AppHeader() {
  return (
    <Container>
      <Row className="align-items-center mb-2">
        <Col>
          <h1 className="m-0">Logo</h1>
        </Col>
        <Col xs={6}>
          <h3 className="m-0">user name</h3>
        </Col>
        <Col>
        <FaUserEdit className="userIcon" />
        </Col>
      </Row>
    </Container>
  );
}

export default AppHeader;
