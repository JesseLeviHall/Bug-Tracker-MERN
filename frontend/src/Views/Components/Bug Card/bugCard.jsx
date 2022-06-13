import React from "react";
import {
  Col,
  ListGroupItem,
  ListGroup,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import moment from "moment";
import { Link } from "react-router-dom";

export default function bugCard(props) {
  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2">
        <CardTitle className="mt-2 text-center" tag="h5">
          {props.bug.name}
        </CardTitle>
        <CardBody>
          <ListGroup flush>
            <ListGroupItem>
              Assigned: <span className="ms-2">{props.bug.assigned}</span>
            </ListGroupItem>
            <ListGroupItem>
              Status:
              <span className="ms-2">
                {props.bug.completed === false ? "Resolved" : "Active"}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Priority: <span className="ms-2">{props.bug.priority}</span>
            </ListGroupItem>
            <ListGroupItem>
              Created:{" "}
              <span className="ms-2">
                {moment(props.bug.time).format("MM-DD-YY,  HH:mm")}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Details: <span className="ms-2">{props.bug.details}</span>
            </ListGroupItem>
            <ListGroupItem>
              Steps: <span className="ms-2">{props.bug.steps}</span>
            </ListGroupItem>
            <ListGroupItem>
              Webpage: <span className="ms-2">{props.bug.webpage}</span>
            </ListGroupItem>
          </ListGroup>
          <Button outline color="info" className="ms-3 mt-3" size="sm">
            <Link to={`/editbug/${props.bug._id}`}>Edit Bug</Link>
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
