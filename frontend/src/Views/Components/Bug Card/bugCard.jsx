import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { markComplete } from "../../../Controllers/Reducers/bugSlice";
import { useDispatch } from "react-redux";
import Priority from "../../../Controllers/priorityController";

export default function bugCard(props) {
  const { color } = Priority(props.priority);
  function Clicked() {
    props.clicked(props.name);
  }

  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2" onClick={Clicked} style={{ color: color }}>
        <CardTitle className="mt-2 text-center" tag="h5">
          {props.bug.name}
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
          <Button outline color="info" className="ms-3 mt-3" size="sm">
            Mark Complete
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}

// for button  onClick={() => {
// dispatch(markComplete());
//  }}>
