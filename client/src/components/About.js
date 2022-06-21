import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Form, Navbar, Nav, Container } from "react-bootstrap";

function About(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <h1>About KLB Athletics</h1>
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
        <h2>Who We Are</h2>
        <p>
          We believe fitness shouldn't suck!! It should be fun while still
          challenging you and help you get closer to your goals!
        </p>
      </div>
      <>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Card.Body>
            <Card.Text>
              While challenging you and feel like you're at a party for an hour
              of your day... It'll have you ready for what life throws at you.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img
            variant="bottom"
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
          <Card.Body>
            <Card.Text>
              Whaever your skill level is... Theres a place for you here at KLB
              Athletics. No more boring workouts... Its time to party!
            </Card.Text>
          </Card.Body>
        </Card>
      </>
      <div className="footer">
        <Link to={"/classes/"}>
          <Button className="joinbtn" variant="primary">
            See Our Classes!
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default About;
