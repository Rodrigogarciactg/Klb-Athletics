import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ControlledCarousel from "./ControlledCarousel";
import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";
import { Navbar, Nav, Container } from "react-bootstrap";
import Paper from "@mui/material/Paper";
function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <h1>Welcome To KLB Athletics</h1>
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
      <div>
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
        <h3>Group Fitness That Doesn't Suck</h3>
      </div>
      <div className="topboxes">
        <Card border="primary" className="classmenu">
          <Link to={"/memberships"}>
            <Card.Header>What We Offer</Card.Header>
          </Link>
          <Card.Body>Cardio</Card.Body>
          <Card.Body>Weightlifting</Card.Body>
          <Card.Body>Core</Card.Body>
        </Card>
        <div>
          <Card border="primary" className="classmenu">
            <Link to={"/classes"}>
              <Card.Header>Check Out Our Classes</Card.Header>
            </Link>{" "}
            <Card.Body>Morning Breathing</Card.Body>
            <Card.Body>Funcitonal Throwdown</Card.Body>
            <Card.Body>Crossfit</Card.Body>
            <Card.Body>Kids Class</Card.Body>
          </Card>
        </div>
      </div>
      <div className="images">
        <ControlledCarousel />
      </div>
      <Card className="bottommenu" border="primary" style={{ width: "55rem" }}>
        <Link to={"/memberships"}>
          <Card.Header>Memberships</Card.Header>
        </Link>
        <Card.Body>
          <Card.Title>Pay Per Class</Card.Title>
          <Card.Title>Get A Punch Card</Card.Title>
          <Card.Title> Sign Up For Our Monthly Memberhip</Card.Title>

          <Card.Text>Ask about family discounts!</Card.Text>
        </Card.Body>
      </Card>
      <div className="footer">
        <Link to={"/memberships"}>
          <Button className="joinbtn" variant="primary">
            Join KLB!
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default Home;
