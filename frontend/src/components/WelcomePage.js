import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/WelcomePage.css";


class WelcomePage extends Component {

  state = {
    username: "",
  }
  onChangeName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin = (e) => {
    localStorage.setItem("user",(this.state.username));
  }

  onSubmit = (e) => {
    this.setState({
      username: "",
    })
  };


  render() {
    return (
      <div className="WelcomePage">
      <Header />
      <main>
        <h2 id="welcomeText">Welcome Text</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="userName">
            <Form.Control
              type="text"
              placeholder="your name"
              className="text-center"
              onChange={this.onChangeName} name="username"
            />
          </Form.Group>
          <Link to="/landing">
            <Button onClick={this.handleLogin} id="welcomeCTA" className="w-100 text-white">
              Let's begin
            </Button>
          </Link>
        </Form>
      </main>
      <Footer />
    </div>
    );
  }
}

export default WelcomePage;