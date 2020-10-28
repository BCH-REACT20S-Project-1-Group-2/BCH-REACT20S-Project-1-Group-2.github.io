import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function Welcome() {
  const { welcomeText, welcomeCTA } = require("../phrases/App.json");
  return (
    <>
      <Header />
      <main>
        <h2>{welcomeText}</h2>
        <Form>
          <Form.Group controlId="formUserName">
            <Form.Control type="text" placeholder="your name" />
          </Form.Group>
          <Link to="/landing">
            <Button variant="primary">{welcomeCTA}</Button>
          </Link>
        </Form>
      </main>
      <Footer />
    </>
  );
}

export default Welcome;
