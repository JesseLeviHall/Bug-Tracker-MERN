import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { addBug } from "../../../Controllers/Reducers/bugSlice";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChanged = (e) => setName(e.target.value);
  const onLastNameChanged = (e) => setDetails(e.target.value);
  const onUserNameChanged = (e) => setName(e.target.value);
  const onPasswordChanged = (e) => setDetails(e.target.value);

  const canSave =
    [firstName, lastName, userName, password].every(Boolean) &&
    addRequestStatus === "idle";

  const registerSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(newUser({ firstName, lastName, userName, password })).unwrap();
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
    <div className="container-sm">
      <h1 className="form-title mb-4 mt-5 text-center">Register New User</h1>
      <Form className="offset-md-2" onSubmit={registerSubmit}>
        <FormGroup>
          <Label for="fisrtName">First Name:</Label>
          <Col sm={9}>
            <Input
              value={firstName}
              onChange={onFirstNameChanged}
              name="firstName"
              placeholder="First Name"
              required
            />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
