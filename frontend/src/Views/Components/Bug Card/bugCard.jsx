import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import priorityController from "../../../Controllers/priorityController";
import "./bugcard.css";

export default function bugCard(props) {
  const { name, priority, version } = props.bug;
  const { level, color } = priorityController(priority);
  function Clicked() {
    props.clicked(name);
  }
  return (
    <Card onClick={Clicked} style={{ color: color }}>
      <CardTitle>{name}</CardTitle>
      <CardBody>{level}</CardBody>
      <h5>{version}</h5>
    </Card>
  );
}
