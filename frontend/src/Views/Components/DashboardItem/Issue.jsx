import React from "react";
import Priority from "../../../Controllers/priorityController";
import { Card, CardTitle, CardText, Button } from "reactstrap";

export default function Issue(props) {
  const { level, color } = Priority(props.priority);
  return (
    <Card style={{ color: color }}>
      <CardTitle className="text-center mt-3" tag="h5">
        Bugs With Priority {level}
      </CardTitle>
      <CardText className="text-center justify-content-center p-3">
        Active Bugs: {props.count} <br />
        <Button
          color="info"
          className="col-4 mt-3"
          size="sm"
          onClick={props.clicked}>
          View
        </Button>
      </CardText>
    </Card>
  );
}
