import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";
import "./sidebar.css";

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function SignOut() {
    dispatch(signOut);
  }
  return (
    <div className="sidebar">
      <Link className="nav-link" to="/">
        <h1 className="brand">Bug Tracker</h1>
      </Link>
      <ul>
        <li>
          <Link className="nav-link" to={"/"}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/viewbugs"}>
            View Bugs
          </Link>
        </li>
        {auth.admin && (
          <li>
            <Link className="nav-link" to={"/create"}>
              Create Bug
            </Link>
          </li>
        )}
      </ul>
      <button onClick={SignOut} className="nav-link logout">
        Log out
      </button>
    </div>
  );
};
