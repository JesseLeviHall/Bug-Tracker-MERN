import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBug } from "../../../Controllers/Reducers/bugSlice";
import "./publicform.css";
import {
  Card,
  CardHeader,
  CardText,
  Form,
  Row,
  FormGroup,
  Input,
  Col,
  Button,
  CardFooter,
} from "reactstrap";

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
    <div id="container" className="container-fluid">
      <Row>
        <h1 id="h1" className="mt-5">
          Did You Experience A Website Issue?
        </h1>
      </Row>
      <Row>
        <h2 id="h2" className=" mb-5">
          We appologize for the problem.
        </h2>
      </Row>
      <div className="container-sm" id="message-container">
        <Row sm="2">
          <Card color="info" outline id="card">
            <CardHeader id="cardheader" tag="h4">
              Send Us Information
            </CardHeader>
            <CardText id="cardtext">
              Fill in the form and we will resolve the issue as soon as
              possible.
            </CardText>
            <CardFooter className="icon-text">
              <i className="icon">-Dev Team</i>
            </CardFooter>
          </Card>
          <Form onSubmit={formSubmit}>
            <Row className="mt-5">
              <FormGroup className="mb-4">
                <Input
                  value={name}
                  onChange={onNameChanged}
                  type="text"
                  name="name"
                  placeholder="What is the problem?"
                />
              </FormGroup>
              <FormGroup className="mb-5">
                <Input
                  value={details}
                  onChange={onDetailsChanged}
                  type="textarea"
                  name="details"
                  placeholder="Please provide a description"
                />
              </FormGroup>
            </Row>
            <FormGroup className="mb-4">
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
            <FormGroup>
              <Col sm={12}>
                <Input
                  value={webpage}
                  onChange={onWebpageChanged}
                  id="webpage"
                  name="webpage"
                  placeholder="What website/webpage does this happen?"></Input>
              </Col>
            </FormGroup>
            <FormGroup className="ms-md-3">
              <Col className="ms-5">
                <Button
                  id="login-box-a"
                  disabled={!canSave}
                  className="mt-5 ms-5 col-6"
                  type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default PublicForm;
