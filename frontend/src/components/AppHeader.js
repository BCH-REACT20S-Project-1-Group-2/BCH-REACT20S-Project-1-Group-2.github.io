import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import logo from "../assets/BCtrlLogo.svg"

export default class AppHeader extends React.Component {
  state = {
    username: localStorage.getItem("user"),
  };

  render() {
    return (
      <Container className="mx-4">
        <Row className="d-flex align-items-center">
          <Col className="px-0 d-flex justify-content-start">
            <img src={logo} alt="BudgetCtrl logo"/>
          </Col>
          <Col className="px-0 text-center">
            <h3>{this.state.username}</h3>
          </Col>
          <Col className="px-0 d-flex justify-content-end">
            <h3>
              <FaUserEdit className="userIcon" />
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
