import React from "react";
import "./publicform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Form, Row, FormGroup, Input, Col, Button } from "reactstrap";

const PublicForm = () => {
  return (
    <div id="container" className="container-sm ">
      <h1 className="mt-5">Did You Experience A Website Issue?</h1>
      <h2 className=" mb-5">We appologize for the problem.</h2>
      <div id="message-container">
        <div className="contact-info">
          <h4>Send Us Information</h4>
          <p>
            Fill in the form and we will resolve the issue as soon as possible.
          </p>
          <div className="icon-text">
            <i className="icon">-Dev Team</i>
          </div>
        </div>
        <Form className="ms-5 mt-4">
          <Row className="mt-5">
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="What is the problem?"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="details"
                placeholder="Please provide a description"
              />
            </FormGroup>
          </Row>
          <FormGroup className="sm-ms-4">
            <Col sm={12}>
              <Input
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
                id="webpage"
                name="webpage"
                placeholder="What website/webpage does this happen?"></Input>
            </Col>
          </FormGroup>
          <FormGroup className="sm-ms-4">
            <Button className="mt-4 mb-5" color="info" type="submit">
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
