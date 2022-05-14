import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./bugcard.css";

export default (props) => {
  const { name, priority, version } = props.bug;
  function Clicked() {
    props.clicked(props.name);
  }
  return (
    <Card onClick={Clicked}>
      <CardTitle className="name">{name}</CardTitle>
      <CardBody className="priority">{priority}</CardBody>
      <h5 className="version">{version}</h5>
    </Card>
  );
};
