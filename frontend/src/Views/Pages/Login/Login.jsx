import { faBug } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardText,
  CardSubtitle,
  Form,
  FormGroup,
  Navbar,
  Input,
  Row,
  Col,
} from "reactstrap";
import { login } from "../../../Controllers/Reducers/authSlice";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChanged = (e) => setUserName(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const { user, err, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (err) {
      console.log(err);
    }
    if (status === "succeeded") {
      history("/");
    }
  }, [user, err, history, dispatch]);

  const loginSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(
        login({
          userName,
          password,
        })
      ).unwrap();
      setUserName("");
      setPassword("");
      history("/");
    } catch (error) {
      console.log("failed to sign in", error);
    }
  };

  return (
    <div className="container-fluid full-width" style={{ height: "100vh" }}>
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
          <Card
            className="sm-4"
            outline
            style={{
              background: "linear-gradient(#141e30, #243b55)",
              borderColor: "#000000",
              borderRadius: "20px",
            }}>
            <CardBody>
              <CardTitle
                style={{ color: "#fff" }}
                className="text-center"
                tag="h1">
                Bug Tracker
              </CardTitle>
              <CardText style={{ color: "#fff" }} className="text-center mb-5">
                Virtual bug tracker for managing website issues
              </CardText>
              <CardSubtitle
                className="text-center mb-3"
                tag="h5"
                style={{ fontWeight: "bold", color: "#fff" }}>
                Sign In:
              </CardSubtitle>
              <Form onSubmit={loginSubmit}>
                <FormGroup>
                  <Input
                    required
                    name="User Name"
                    placeholder="User Name"
                    onChange={onUserNameChanged}
                    value={userName}></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={onPasswordChanged}
                    value={password}></Input>
                </FormGroup>

                <Button className="mt-2" block color="info" type="submit">
                  Login
                </Button>
                <p
                  style={{ color: "#fff" }}
                  className="forgot-password text-center mt-4">
                  New? <Link to={"/user/register"}>Sign-Up</Link>
                </p>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

/*  
<GoogleLogin
            clientId="130983152968-mn8tkng21c12lcpirrnu6cp83ut2ofh4.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
*/
