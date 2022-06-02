import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { addBug } from "../../../Controllers/Reducers/bugSlice";

export default function BugForm() {
  const [createBug, setCreateBug] = useState({});
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addBug({ createBug }));
    setCreateBug({
      ...createBug,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-sm ">
      <h1 className="form-title mb-4 mt-5 text-center">Create New Bug</h1>
      <Form onSubmit={formSubmit}>
        <FormGroup className="justify-content-center">
          <Label for="Name">Name:</Label>
          <Col sm={9}>
            <Input
              value={createBug.name}
              onChange={(e) => setCreateBug(e.target.value)}
              name="name"
              placeholder="Bug Name"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Details">Details:</Label>
          <Col sm={9}>
            <Input
              value={createBug.details}
              onChange={(e) => setCreateBug(e.target.value)}
              required
              id="details"
              name="details"
              type="textarea"
              placeholder="Please describe the issue"
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Steps">Steps:</Label>
          <Col sm={9}>
            <Input
              value={createBug.steps}
              onChange={(e) => setCreateBug(e.target.value)}
              required
              id="steps"
              name="steps"
              type="textarea"
              placeholder="Please write the steps taken leading up to the issue so we can recreate the bug"
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label sm={2} for="Priority">
            Priority:
          </Label>
          <Col sm={9}>
            <Input
              value={createBug.priority}
              onChange={(e) => setCreateBug(e.target.value)}
              required
              id="priority"
              name="priority"
              type="select">
              <option value="1">High</option>
              <option value="2">Moderate</option>
              <option value="3">Low</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label sm={2} for="Assigned">
            Assigned:
          </Label>
          <Col sm={9}>
            <Input
              value={createBug.assigned}
              onChange={(e) => setCreateBug(e.target.value)}
              required
              id="assigned"
              name="assigned"
              type="select">
              <option value="1">User1</option>
              <option value="2">User2</option>
              <option value="3">User3</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Webpage">Application Version:</Label>
          <Col sm={9}>
            <Input
              value={createBug.webpage}
              onChange={(e) => setCreateBug(e.target.value)}
              id="webpage"
              name="webpage"
              placeholder="What webpage is this happning on?"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Col xs={10}>
            <Button className="mt-4 mb-5" color="info" type="submit">
              Submit Bug
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
