import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
const Detail = (props) => {
  const [classes, setClasses] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const { removeFromDom } = props;
  const deleteClasses = (id) => {
    axios
      .delete("http://localhost:8000/api/classes/" + id)
      .then((res) => {
        navigate("/classes");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/classes/" + id)
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="top">
        <div>
        </div>
          <h1 className="detailHeader">{classes.workoutName}</h1>
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
        <Card className="detail" border="primary" style={{ width: "55rem" }}>
          <Card.Header>{classes.workoutName}</Card.Header>
          <div className="membershipBody">
            <Card.Body>
              <Card.Text>Capacity:{classes.cap}</Card.Text>
              <Card.Text>Time Limit:{classes.timeLimit}</Card.Text>
              <Card.Text>Description:{classes.description}</Card.Text>
            </Card.Body>
          </div>
          <div className="detailBtns">
            <Link to={"/classes/edit/" + classes._id}>
              <Button className="editBtn" variant="primary">
                Edit
              </Button>{" "}
            </Link>
            <Button
              className="deleteBtn"
              variant="primary"
              type="submit"
              onClick={(e) => {
                deleteClasses(classes._id);
              }}
            >
              Delete
            </Button>
          </div>
        </Card>
      </div>
      <div>
        {/* <input className="addbtn" type="submit" value="Submit" /> */}
      </div>
      {/* <Link to={"/classes/edit/" + classes._id}>Edit</Link> */}
      <div>
        {/* <input className="addbtn" type="submit" value="Submit" /> */}
      </div>
      {/* <button
        className="adoptbtn"
        onClick={(e) => {
          deleteClasses(classes._id);
        }}
      >
        Delete {classes.workoutName}
      </button> */}
    </div>
  );
};
export default Detail;
