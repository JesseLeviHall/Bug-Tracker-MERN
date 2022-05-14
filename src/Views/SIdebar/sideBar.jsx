import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav, Button } from "reactstrap";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";
//import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faWrench,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export default ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function SignOut() {
    dispatch(signOut);
  }
  return (
    <div className="container-md">
      <h1 className="m-5">Bug Tracer</h1>
      <Nav tabs>
        <NavItem>
          <NavLink href="/">
            <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="ms-2" href="/viewbugs">
            <FontAwesomeIcon className="mr-2" icon={faMapMarkedAlt} />
            View Bugs
          </NavLink>
        </NavItem>
        {auth.admin && (
          <NavItem>
            <NavLink className="nav-link" to={"/create"}>
              <FontAwesomeIcon icon={faWrench} className="mr-2" />
              Create Bug
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <Button className="m-5" color="info" onClick={SignOut}>
        Sign Out
      </Button>
    </div>
  );
};
