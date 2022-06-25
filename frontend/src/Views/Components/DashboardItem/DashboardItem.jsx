import React from "react";
import Priority from "../../../Controllers/priorityController";
import { Card, CardTitle, CardText } from "reactstrap";

export default function DashboardItem(props) {
  const { level, color } = Priority(props.priority);
  return (
    <Card style={{ color: color }}>
      <CardTitle className="text-center mt-3" tag="h5">
        Bugs With Priority {level}
      </CardTitle>
      <CardText className="text-center justify-content-center p-3">
        Active Bug Count: {props.count} <br />
      </CardText>
    </Card>
  );
}
