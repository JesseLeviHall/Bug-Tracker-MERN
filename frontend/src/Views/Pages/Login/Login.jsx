import { faBug } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useHistory } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
import { signIn } from "../../../Controllers/Reducers/authSlice";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formInput, setFormInput] = useState({
    username: "",
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

  /* const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  const googleError = (error) =>
    console.log(error, "Google Sign In was unsuccessful.");
    */

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
          <Card
            className="sm-4"
            outline
            style={{
              backgroundColor: "#fee7e7",
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
                Sign In:
              </CardSubtitle>
              <Form>
                <FormGroup>
                  <Input
                    name="name"
                    placeholder="User Name"
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
                  New? <Link to={"/register"}>Sign-Up</Link>
                </p>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

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
