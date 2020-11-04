import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/WelcomePage.css";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <Header />
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
      <Footer />
    </div>
  );
}

export default WelcomePage;
