import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
const ClassList = (props) => {
  const { classes, setClasses } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/classes")
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="classForm">
      {classes.map((classes, index) => {
        return (
          <div className="classCardContainer" key={index}>
            <Card
              className="classCards"
              border="dark"
              style={{ width: "18rem" }}
            >
              <Card.Header>
                {" "}
                <Link to={`/classes/${classes._id}`}>
                  {classes.workoutName}
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Title>{classes.cap}</Card.Title>
                <Card.Text>{classes.timeLimit}</Card.Text>
                <Card.Text>{classes.description}</Card.Text>
              </Card.Body>
            </Card>
            {/* <p>{classes.workoutName}</p>
            <p>{classes.cap}</p>
            <p>{classes.timeLimit}</p>
            <p>{classes.description}</p>
            <Link to={`/classes/${classes._id}`}>{classes.workoutName}</Link> */}
          </div>
        );
      })}
    </div>
  );
};
export default ClassList;
