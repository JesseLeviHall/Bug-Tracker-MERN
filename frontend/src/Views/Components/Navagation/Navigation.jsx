import React from "react";
import { Link, useHistory } from "react-router-dom";
import { NavItem, NavLink, Nav, Button, Col } from "reactstrap";
import { faBug, faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut, reset } from "../../../Controllers/Reducers/authSlice";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faWrench,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ isOpen, toggle }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();

  function onSignOut() {
    dispatch(signOut());
    dispatch(reset());
    history.push("/user/login");
  }

  //will need a sign out function
  return (
    <div className="container-sm">
      <Col className="text-center mt-5 mb-5 text-nowrap">
        <h1>
          <FontAwesomeIcon icon={faBug} className="pe-4" />
          Bug Tracker
        </h1>
      </Col>
      <Nav tabs className="justify-content-center">
        <NavItem className="py-3">
          <NavLink tag={Link} to="/">
            <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />{" "}
            {"  Dashboard"}
          </NavLink>
        </NavItem>

        <NavItem className="py-3">
          <NavLink className="ms-2" tag={Link} to="/viewbugs">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            {"  View All Bugs"}
          </NavLink>
        </NavItem>

        <NavItem className="py-3">
          <NavLink className="nav-link" tag={Link} to="/create">
            <FontAwesomeIcon icon={faWrench} />
            {" Create New Bug"}
          </NavLink>
        </NavItem>

        <NavItem className="py-3">
          <NavLink className="nav-link" tag={Link} to="/mybugs">
            <FontAwesomeIcon icon={faPersonDotsFromLine} />
            {" Assigned To Me"}
          </NavLink>
        </NavItem>

        <NavItem className=" offset-md-1 p-4">
          <Button
            outline
            size="sm"
            className="$spacer * 3"
            color="info"
            onClick={onSignOut}>
            Sign Out
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
}
