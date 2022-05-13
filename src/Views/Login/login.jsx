import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardTitle } from "reactstrap";
import { signIn } from "../../Controllers/Redux/authSlice";
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
    <div className="container-fluid loginBG">
      <div className="row" id="head">
        <h1 className="col">Bug Track Dashboard</h1>
        <p className="col">Virtual bug tracker for managing website issues</p>
      </div>
      <div className="login-panel">
        <Card className="login-panel" id="card">
          <CardBody>
            <CardTitle
              className="row"
              id="cardtitle"
              style={{ fontWeight: "bold" }}>
              Login:
            </CardTitle>
            <form className="row">
              <input
                className="login-panel-input"
                name="name"
                placeholder="Name"
                onChange={inputchanged}
                value={formInput.name}></input>
              <input
                className="login-panel-input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={inputchanged}
                value={formInput.password}></input>
              <button type="submit" onClick={submit}>
                Login
              </button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
