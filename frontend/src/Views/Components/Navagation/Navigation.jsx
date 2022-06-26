import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavItem, NavLink, Nav, Button, Col, Row } from "reactstrap";
import { faBug, faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signOut, reset } from "../../../Controllers/Reducers/authSlice";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faWrench,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const dispatch = useDispatch();

  const history = useNavigate();

  function onSignOut() {
    dispatch(signOut());
    dispatch(reset());
    history("/user/login");
  }

  return (
    <div className="navbar">
      <Col className="text-center mt-5 text-nowrap">
        <h1 id="navtitle">
          <FontAwesomeIcon icon={faBug} className="pe-4" />
          Bug Tracker
        </h1>
      </Col>

      <Row className="justify-content-center m-5 text-nowrap">
        <Nav tabs className="p-5">
          <NavItem>
            <NavLink tag={Link} to="/">
              <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />{" "}
              {"  Dashboard"}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="ms-2" tag={Link} to="/viewbugs">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              {"  View All Bugs"}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" tag={Link} to="/create">
              <FontAwesomeIcon icon={faWrench} />
              {" Create New Bug"}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" tag={Link} to="/mybugs">
              <FontAwesomeIcon icon={faPersonDotsFromLine} />
              {" Assigned To Me"}
            </NavLink>
          </NavItem>

          <NavItem className="ms-4 py-2">
            <Button
              outline
              size="sm"
              className="$spacer * 3"
              color="info"
              onClick={onSignOut}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Out
            </Button>
          </NavItem>
        </Nav>
      </Row>
    </div>
  );
}
