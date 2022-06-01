import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Priority from "../../../Controllers/priorityController";
import "./bugcard.css";

export default function bugCard(props) {
  const { level, color } = Priority(props.priority);
  function Clicked() {
    props.clicked(props.bugs.name);
  }

  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2" onClick={Clicked} style={{ color: color }}>
        <CardTitle className="mt-2">Name: {props.bugs._id}</CardTitle>
        <CardBody>
          <CardText>{level}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
