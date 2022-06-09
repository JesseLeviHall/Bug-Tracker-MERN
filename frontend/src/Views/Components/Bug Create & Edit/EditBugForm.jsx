import React, { useState } from "react";
import {
  selectBugById,
  updateBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

const EditBugForm = () => {
  const { bugId } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [steps, setSteps] = useState("");
  const [priority, setPriority] = useState("");
  const [webpage, setWebpage] = useState("");
  const [assigned, setAssigned] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onDetailsChanged = (e) => setDetails(e.target.value);
  const onStepsChanged = (e) => setSteps(e.target.value);
  const onPriorityChanged = (e) => setPriority(e.target.value);
  const onWebpageChanged = (e) => setWebpage(e.target.value);
  const onAssignedChanged = (e) => setAssigned(e.target.value);

  const updateThisBug = useSelector((state) => selectBugById(state, bugId));

  const formSubmit = (e) => {
    e.preventDefault();
    try {
      const id = bugId;
      setAddRequestStatus("pending");
      dispatch(
        updateBug(id, {
          id: id,
          name,
          assigned,
          details,
          steps,
          priority,
          webpage,
        })
      ).unwrap();
      setName("");
      setDetails("");
      setSteps("");
      setPriority("");
      setWebpage("");
      setAssigned("");
    } catch (err) {
      console.error("Failed to save the update", err);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  if (!updateThisBug) {
    return (
      <div className="container-sm">
        <h2 className="mt-5 text-center">Bug not found!</h2>
      </div>
    );
  }

  return (
    <div className="container-sm">
      <h1 className="form-title mb-4 mt-5 text-center">
        Form To Update and Assign
      </h1>
      <Form className="offset-md-2" onSubmit={formSubmit}>
        <FormGroup>
          <Label for="Name">Bug Name:</Label>
          <Col sm={9}>
            <Input
              value={name}
              onChange={onNameChanged}
              name="name"
              placeholder={updateThisBug.name}
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Assigned">Assign to user:</Label>
          <Col sm={9}>
            <Input
              value={assigned}
              onChange={onAssignedChanged}
              id="assigned"
              name="assigned"
              placeholder={updateThisBug.assigned}></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Details">Bug Details:</Label>
          <Col sm={9}>
            <Input
              value={details}
              onChange={onDetailsChanged}
              id="details"
              name="details"
              type="textarea"
              placeholder={updateThisBug.details}
            />
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Steps">Steps:</Label>
          <Col sm={9}>
            <Input
              value={steps}
              onChange={onStepsChanged}
              id="steps"
              name="steps"
              type="textarea"
              placeholder={updateThisBug.steps}
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
              id="priority"
              name="priority"
              type="select">
              <option>{updateThisBug.priority}</option>
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
              placeholder={updateThisBug.webpage}></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Col xs={10}>
            <Button className="mt-4 mb-5" color="info" type="submit">
              Update
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EditBugForm;
