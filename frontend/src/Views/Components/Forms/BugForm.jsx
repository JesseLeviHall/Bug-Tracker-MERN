import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { addBug } from "../../../Controllers/Reducers/bugSlice";
import Navigation from "../Navagation/Navigation";

export default function BugForm() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [steps, setSteps] = useState("");
  const [priority, setPriority] = useState("");
  const [webpage, setWebpage] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onDetailsChanged = (e) => setDetails(e.target.value);
  const onStepsChanged = (e) => setSteps(e.target.value);
  const onPriorityChanged = (e) => setPriority(e.target.value);
  const onWebpageChanged = (e) => setWebpage(e.target.value);

  const canSave =
    [name, details, steps, priority, webpage].every(Boolean) &&
    addRequestStatus === "idle";

  const formSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addBug({ name, details, steps, priority, webpage })).unwrap();
        setName("");
        setDetails("");
        setSteps("");
        setPriority("");
        setWebpage("");
        history("/viewbugs");
      } catch (err) {
        console.error("Failed to save the bug", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div className="container-sm">
      <Navigation />
      <h1 className="form-title mb-4 mt-5 text-center">Create New Bug</h1>
      <Form
        style={{ color: "#fff" }}
        className="offset-md-2"
        onSubmit={formSubmit}>
        <FormGroup>
          <Label for="Name">Bug Name:</Label>
          <Col sm={9}>
            <Input
              value={name}
              onChange={onNameChanged}
              name="name"
              placeholder="Bug Name"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Details">Bug Details:</Label>
          <Col sm={9}>
            <Input
              value={details}
              onChange={onDetailsChanged}
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
              value={steps}
              onChange={onStepsChanged}
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
              value={priority}
              onChange={onPriorityChanged}
              required
              id="priority"
              name="priority"
              type="select">
              <option>Select</option>
              <option value="1">High</option>
              <option value="2">Moderate</option>
              <option value="3">Low</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup className="sm-ms-4">
          <Label for="Webpage">Webpage of Bug:</Label>
          <Col sm={9}>
            <Input
              value={webpage}
              onChange={onWebpageChanged}
              id="webpage"
              name="webpage"
              placeholder="What webpage is this happning on?"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Col xs={10}>
            <Button
              className="mt-4 mb-5"
              color="info"
              type="submit"
              disabled={!canSave}>
              Submit Bug
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
