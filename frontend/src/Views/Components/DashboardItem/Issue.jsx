import React from "react";
import Priority from "../../../Controllers/priorityController";
import { Card, CardTitle, CardText, Button } from "reactstrap";

export default function Issue(props) {
  const { level, color } = Priority(props.priority);
  return (
    <div className="container-sm">
      <div style={{ color: color }}>
        <Card body color="info" inverse>
          <CardTitle className="text-center" tag="h5">
            Bugs With Priority {level}
          </CardTitle>
          <CardText className="text-center">
            Active Bugs: {props.count}
          </CardText>
          <Button onClick={props.clicked}>View</Button>
        </Card>
      </div>
    </div>
  );
}
