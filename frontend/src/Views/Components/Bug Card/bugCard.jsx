import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import priorityController from "../../../Controllers/priorityController";
import "./bugcard.css";

export default bugCard = (props) => {
  const { name, priority, version } = props.bug;
  const { level, color } = priorityController(priority);
  function Clicked() {
    props.clicked(name);
  }
  return (
    <Card onClick={Clicked} style={{ color: color }}>
      <CardTitle className="name">{name}</CardTitle>
      <CardBody className="priority">{level}</CardBody>
      <h5 className="version">{version}</h5>
    </Card>
  );
};
