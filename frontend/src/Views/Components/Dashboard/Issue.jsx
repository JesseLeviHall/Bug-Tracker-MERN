import React from "react";
import Priority from "../../../Controllers/priorityController";
import { Card, Row, Col, CardTitle, CardText, Button } from "reactstrap";

export default (props) => {
  const { level, color } = Priority(props.priority);
  return (
    <div className="container-sm">
      <div style={{ color: color }}>
        <Card body color="info" inverse>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            <p>Total: {props.count}</p>
            <p>Priority: {level}</p>
          </CardText>
          <Button onClick={props.clicked}>View</Button>
        </Card>
      </div>
    </div>
  );
};
