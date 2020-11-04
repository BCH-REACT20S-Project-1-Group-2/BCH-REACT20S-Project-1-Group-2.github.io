import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../styles/WelcomePage.css";

function WelcomePage() {
  return (
      <main>
        <h2 id="welcomeText">Welcome Text</h2>
        <Form>
          <Form.Group controlId="userName">
            <Form.Control
              type="text"
              placeholder="your name"
              className="text-center"
            />
          </Form.Group>
          <Link to="/landing">
            <Button id="welcomeCTA" className="w-100 text-white">
              Let's begin
            </Button>
          </Link>
        </Form>
      </main>
  );
}

export default WelcomePage;
