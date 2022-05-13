import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Login/login";
import ViewBugs from "./Views/Pages/viewBugs";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Views/SIdebar/sideBar";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <div>
          <SideBar />
          <ViewBugs />
        </div>
      )}
    </Router>
  );
}

export default App;
