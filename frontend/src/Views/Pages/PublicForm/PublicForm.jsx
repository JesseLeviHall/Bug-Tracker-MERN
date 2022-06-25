import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBug } from "../../../Controllers/Reducers/bugSlice";
import "./publicform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Form, Row, FormGroup, Input, Col, Button } from "reactstrap";

const PublicForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [steps, setSteps] = useState("");
  const [webpage, setWebpage] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onDetailsChanged = (e) => setDetails(e.target.value);
  const onStepsChanged = (e) => setSteps(e.target.value);
  const onWebpageChanged = (e) => setWebpage(e.target.value);

  const canSave =
    [name, details, steps, webpage].every(Boolean) &&
    addRequestStatus === "idle";

  const formSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addBug({ name, details, steps, webpage })).unwrap();
        setName("");
        setDetails("");
        setSteps("");
        setWebpage("");
        history("/thankyou");
      } catch (err) {
        console.error("Failed to save the bug", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div id="container" className="container-sm ">
      <h1 id="h1" className="mt-5">
        Did You Experience A Website Issue?
      </h1>
      <h2 id="h2" className=" mb-5">
        We appologize for the problem.
      </h2>
      <div id="message-container">
        <div className="contact-info">
          <h4 id="h4">Send Us Information</h4>
          <p id="p">
            Fill in the form and we will resolve the issue as soon as possible.
          </p>
          <div className="icon-text">
            <i className="icon">-Dev Team</i>
          </div>
        </div>
        <Form className="ms-5 mt-4" onSubmit={formSubmit}>
          <Row className="mt-5">
            <FormGroup>
              <Input
                value={name}
                onChange={onNameChanged}
                type="text"
                name="name"
                placeholder="What is the problem?"
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={details}
                onChange={onDetailsChanged}
                type="textarea"
                name="details"
                placeholder="Please provide a description"
              />
            </FormGroup>
          </Row>
          <FormGroup className="sm-ms-4">
            <Col sm={12}>
              <Input
                value={steps}
                onChange={onStepsChanged}
                required
                id="steps"
                name="steps"
                type="textarea"
                placeholder="Steps to re-create the issue"
              />
            </Col>
          </FormGroup>
          <FormGroup className="sm-ms-4">
            <Col sm={12}>
              <Input
                value={webpage}
                onChange={onWebpageChanged}
                id="webpage"
                name="webpage"
                placeholder="What website/webpage does this happen?"></Input>
            </Col>
          </FormGroup>
          <FormGroup className="sm-ms-4">
            <Button
              disabled={!canSave}
              className="mt-4 mb-5"
              color="info"
              type="submit">
              <FontAwesomeIcon icon={faShareFromSquare} />
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default PublicForm;
