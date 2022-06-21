import React, { useState } from "react";
import axios from "axios";
import ClassForm from "../components/ClassForm";
import ClassList from "../components/ClassList";
import { Image, Button, Form, Navbar, Nav, Container } from "react-bootstrap";

const Main = (props) => {
  const [classes, setClasses] = useState([]);
  return (
    <div>
      <div className="top">
        <h1>KLB Athletics Classes:</h1>
        <div className="nav">
          <div className="navbar">
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="/home/">Home</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/classes/">Classes</Nav.Link>
                  <Nav.Link href="/memberships/">Memberships</Nav.Link>
                  <Nav.Link href="/aboutus/">About Us</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="classList">
        <ClassForm classes={classes} setClasses={setClasses} />
        <ClassList classes={classes} setClasses={setClasses} />
      </div>
    </div>
  );
};

export default Main;
