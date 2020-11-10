import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AppHeader.css";


export default class AppHeader extends React.Component {

  state = {
    username: localStorage.getItem("user")
  };

  render() {
    return (
      <Container>
      <Row className="align-items-center mb-2">
        <Col>
          <h1 className="m-0">Logo</h1>
        </Col>
        <Col xs={6}>
          <h3 className="m-0">{this.state.username}</h3>
        </Col>
        <Col>
          <div className="m-0 userIcon"></div>
        </Col>
      </Row>
    </Container>
    );
  }
}