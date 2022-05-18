import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import BugModel from "../../../Models/bugModel";

export default (props) => {
  const [createBug, setCreateBug] = useState(new BugModel(props.bug));
  function inputChanged(e) {
    setCreateBug({
      ...createBug,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container-sm">
      {props.title == "Edit Bug" && <Button close onClick={props.close} />}
      <h1 className="form-title mb-4 mt-5">{props.title}</h1>
      <Form>
        <FormGroup className="justify-content-center">
          <Label for="Name">Name:</Label>
          <Col sm={9}>
            <Input
              value={createBug.name}
              onChange={inputChanged}
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
              onChange={inputChanged}
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
              onChange={inputChanged}
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
              onChange={inputChanged}
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
              onChange={inputChanged}
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
          <Label for="Version">Application Version:</Label>
          <Col sm={9}>
            <Input
              value={createBug.version}
              onChange={inputChanged}
              id="version"
              name="version"
              placeholder="What Version?"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Col xs={10}>
            <Button className="mt-4 mb-5" color="info" type="submit">
              {props.title}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};
