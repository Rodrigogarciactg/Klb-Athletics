import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Image, Button, Form, Navbar, Nav, Container } from "react-bootstrap";

const ClassForm = (props) => {
  const { classes, setClasses } = props;
  const [workoutName, setWorkoutName] = useState("");
  const [cap, setCap] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/classes", {
        workoutName,
        cap,
        timeLimit,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/home");
        setClasses([...classes, res.data]);
        setWorkoutName("");
        setCap("");
        setTimeLimit("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="listContainer">
      {/* <div className="top">
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
      </div> */}
      <>
        <Form onSubmit={onSubmitHandler}>
          <div className="test">
            <h2>Add A class Here:</h2>
            <div className="text">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="work">
                  <Form.Label className="label">Class:</Form.Label>
                </div>
                <Form.Control
                  className="input"
                  type="text"
                  value={workoutName}
                  onChange={(e) => setWorkoutName(e.target.value)}
                  required
                />
                {workoutName.length < 3 && workoutName.length > 0 ? (
                  <p>Class Name must be at least 3 characters</p>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <div className="work">
                  <Form.Label>Cap:</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  onChange={(e) => setCap(e.target.value)}
                  value={cap}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <div className="work">
                  <Form.Label>Time Limit:</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  onChange={(e) => setTimeLimit(e.target.value)}
                  value={timeLimit}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="work">
                  <Form.Label>Description:</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                {description.length < 3 && description.length > 0 ? (
                  <p>Class description must be at least 3 characters</p>
                ) : null}
              </Form.Group>
            </div>
          </div>
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {/* <input className="addbtn" type="submit" value="Submit" /> */}
          </div>
        </Form>
        {/* </div> */}
      </>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ClassForm;
