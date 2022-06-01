import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Priority from "../../../Controllers/priorityController";
import "./bugcard.css";

export default function bugCard(props) {
  const { level, color } = Priority(props.priority);
  function Clicked() {
    props.clicked(props.name);
  }

  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2" onClick={Clicked} style={{ color: color }}>
        <CardTitle className="mt-2 text-center" tag="h5">
          Bug Name: {props.bug.name}
        </CardTitle>
        <CardBody>
          <CardText className="text-left ms-3">
            Details: {props.bug.detail} <br />
            Steps: {props.bug.steps} <br />
            Assigned: {props.bug.assigned} <br />
            Created: {props.bug.time} <br />
            Priority: {props.bug.priority} <br />
            Webpage: {props.bug.webpage}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
