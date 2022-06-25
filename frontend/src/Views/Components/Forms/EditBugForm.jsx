import React, { useState } from "react";
import {
  selectBugById,
  editBug,
  deleteBug,
} from "../../../Controllers/Reducers/bugSlice";
import Navigation from "../Navagation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

const EditBugForm = () => {
  const { bugId } = useParams();
  const updateThisBug = useSelector((state) => selectBugById(state, bugId));
  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [steps, setSteps] = useState("");
  const [priority, setPriority] = useState("");
  const [webpage, setWebpage] = useState("");
  const [assigned, setAssigned] = useState("");
  const [complete, setComplete] = useState(Boolean);

  const onNameChanged = (e) => setName(e.target.value);
  const onDetailsChanged = (e) => setDetails(e.target.value);
  const onStepsChanged = (e) => setSteps(e.target.value);
  const onPriorityChanged = (e) => setPriority(e.target.value);
  const onWebpageChanged = (e) => setWebpage(e.target.value);
  const onAssignedChanged = (e) => setAssigned(e.target.value);
  const onStatusChanged = (e) => setComplete(e.target.value);

  const onDeleteBugClicked = () => {
    try {
      dispatch(deleteBug(updateThisBug._id)).unwrap();
      history("/viewbugs");
    } catch (err) {
      console.error("Failed to delete the bug", err);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(
        editBug({
          id: updateThisBug._id,
          name,
          assigned,
          details,
          steps,
          priority,
          webpage,
          complete,
        })
      ).unwrap();
      setName("");
      setDetails("");
      setSteps("");
      setPriority("");
      setWebpage("");
      setAssigned("");
      history("/viewbugs");
    } catch (err) {
      console.error("Failed to save the update", err);
    }
  };

  if (!updateThisBug) {
    return (
      <div className="container-sm">
        <h2 className="mt-5 text-center">Bug not Selected!</h2>
      </div>
    );
  }

  return (
    <div className="container-sm">
      <Navigation />
      <h1 className="form-title mb-4 mt-5 text-center">
        Form To Update and Assign
      </h1>
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
              onChange={onWebpageChanged}
              id="webpage"
              name="webpage"
              value={webpage}
              placeholder={updateThisBug.webpage}></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Label for="Webpage">Mark Complete:</Label>
          <Col sm={9}>
            <Input
              onChange={onStatusChanged}
              type="checkbox"
              id="complete"
              name="complete"
              value={complete}></Input>
          </Col>
        </FormGroup>
        <FormGroup className="sm-ms-4">
          <Col xs={10}>
            <Button className="mt-4 mb-5" color="info" type="submit">
              Update
            </Button>
            <Button
              onClick={onDeleteBugClicked}
              className="ms-5 mt-4 mb-5"
              color="info"
              type="button">
              Delete
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EditBugForm;
