import React from "react";
import Priority from "../../../Controllers/priorityController";
import { Card, CardTitle, CardText, Button } from "reactstrap";

export default function Issue(props) {
  const { level, color } = Priority(props.priority);
  return (
    <div className="container-sm">
      <div style={{ color: color }}>
        <Card body color="info" inverse>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            Total: {props.count} <br /> Priority: {level}
          </CardText>
          <Button onClick={props.clicked}>View</Button>
        </Card>
      </div>
    </div>
  );
}
