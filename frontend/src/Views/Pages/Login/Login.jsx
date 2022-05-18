import { faBug } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardText,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Navbar,
  Input,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";
import { signIn } from "../../../Controllers/Redux/authSlice";
import "./login.css";

export default () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });

  function inputchanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    <div className="container-as body">
      <Navbar>
        {" "}
        <FontAwesomeIcon icon={faBug} className="mr-2" />
        SIGN-IN
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="no-gutters justify-content-center">
        <Col sm="6">
          <Card id="one" className="sm-4" color="secondary" outline>
            <CardBody>
              <CardTitle className="text-center" tag="h1">
                Bug Tracker
              </CardTitle>
              <CardText className="text-center mb-5">
                Virtual bug tracker for managing website issues
              </CardText>
              <CardSubtitle
                className="text-center mb-3"
                tag="h5"
                style={{ fontWeight: "bold" }}>
                Sign In:
              </CardSubtitle>
              <Form>
                <FormGroup>
                  <Input
                    name="name"
                    placeholder="Name"
                    onChange={inputchanged}
                    value={formInput.name}></Input>
                  <FormFeedback>Something</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Input
                    className="login-panel-input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={inputchanged}
                    value={formInput.password}></Input>
                  <FormFeedback>Something</FormFeedback>
                </FormGroup>
                <Input type="checkbox" className="custom-control-input" />
                <Label
                  className="custom-control-label ms-2"
                  htmlFor="customCheck1">
                  Remember me
                </Label>
                <Button
                  className="mt-2"
                  block
                  color="info"
                  type="submit"
                  onClick={submit}>
                  Login
                </Button>
                <p className="forgot-password text-center mt-4">
                  New? <a href="#">Sign-Up</a>
                </p>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};