import React from "react";
import { markComplete } from "../../Controllers/Reducers/bugSlice";
import {
  Col,
  ListGroupItem,
  ListGroup,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
  CardBody,
  CardTitle,
} from "reactstrap";
import moment from "moment";
import { useDispatch } from "react-redux";

export default function bugCard(props) {
  const dispatch = useDispatch();

  const onMarkComplete = (event) => {
    const id = event.currentTarget.id;
    dispatch(markComplete(id));
  };

  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2">
        <CardTitle className="mt-2 p-1 text-center" tag="h5">
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
                {props.bug.complete ? (
                  <span className="ms-2">Resolved</span>
                ) : (
                  <span className="ms-2">Active</span>
                )}
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
          <Form className="mt-3 ms-3 ">
            <FormGroup check>
              <Input
                id={props.bug._id}
                name="complete"
                type="checkbox"
                onClick={onMarkComplete}
              />
              <Label style={{ color: "whitesmoke" }} for="complete">
                Mark Complete
              </Label>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
