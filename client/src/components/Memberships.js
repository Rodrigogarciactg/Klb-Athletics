import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";
function Memberships(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <h1>KLB Athletics Memberships</h1>
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
      <div className="bottomMessageM">
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
        <h3>We have a few options on how you can get your sweat on!</h3>
      </div>
      <Card className="memberships" border="primary" style={{ width: "55rem" }}>
        <Card.Header>Memberships</Card.Header>
        <div className="membershipBody">
          <Card.Body>
            <Card.Text>Pay Per Class</Card.Text>
            <Card.Title>-Choose based on your goal or time limit</Card.Title>
            <Card.Title>$25</Card.Title>
            <Card.Text>Punch Card</Card.Text>
            <Card.Title>
              -All over the place? Great for sparatic sesssions. Just Refill!
            </Card.Title>
            <Card.Title>3 sessions : $60</Card.Title>
            <Card.Title>5 sessions : $100</Card.Title>
            <Card.Title>10 sessions : $180</Card.Title>
            <Card.Text>Monthly Memberhip</Card.Text>
            <Card.Title>
              -Team no days off? This one is best for you!
            </Card.Title>
            <Card.Title>$200</Card.Title>
            <Card.Title>*Ask about family rates </Card.Title>
          </Card.Body>
        </div>
      </Card>
      <div className="bottomMessageM">
        <h3>
          Now that the boring stuff is over with.. It's time to see what class
          is right for you!
        </h3>
      </div>
      <div className="footer">
        <Link to={"/classes"}>
          <Button className="joinbtn" variant="primary">
            View Classes!
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default Memberships;
