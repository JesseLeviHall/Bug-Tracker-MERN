import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Login/login";
import ViewBugPage from "./Views/Pages/viewBugs";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Views/SIdebar/sideBar";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <div>
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        </div>
      )}
    </Router>
  );
}

export default App;
