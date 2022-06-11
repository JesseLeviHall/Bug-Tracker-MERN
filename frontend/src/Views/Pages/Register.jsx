import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { addBug } from "../../Controllers/Reducers/bugSlice";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);
  const onUserNameChanged = (e) => setUserName(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const canSave =
    [firstName, lastName, userName, password].every(Boolean) &&
    addRequestStatus === "idle";

  const registerSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addBug({ firstName, lastName, userName, password })).unwrap();
        setFirstName("");
        setLastName("");
        setUserName("");
        setPassword("");
      } catch (err) {
        console.log("failed to register user", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div className="container-as body">
      <Navbar>
        {" "}
        <FontAwesomeIcon icon={faBug} className="mr-2" />
        REGISTER
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="no-gutters justify-content-center">
        <Col sm="6">
          <Card
            inverse
            className="sm-4"
            style={{
              backgroundColor: "#626567",
              borderColor: "#000000",
            }}>
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
                Register:
              </CardSubtitle>
              <Form onSubmit={registerSubmit}>
                <FormGroup>
                  <Label for="fisrtName">First Name:</Label>
                  <Input
                    value={firstName}
                    onChange={onFirstNameChanged}
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name:</Label>
                  <Input
                    value={lastName}
                    onChange={onLastNameChanged}
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-5">
                  <Label for="userName">Create User Name:</Label>
                  <Input
                    value={userName}
                    onChange={onUserNameChanged}
                    name="userName"
                    placeholder="User Name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Create Password:</Label>
                  <Input
                    value={password}
                    onChange={onPasswordChanged}
                    name="password"
                    placeholder="new password"
                    required
                  />
                </FormGroup>
                <Button className="mt-5" block color="info" type="submit">
                  Register
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
