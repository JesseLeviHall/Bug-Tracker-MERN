import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Login/login";
import ViewBugPage from "./Views/Pages/viewBugs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path="/viewbugs">
              {" "}
              <ViewBugPage />
            </Route>
          </Switch>
          <ViewBugPage />
        </div>
      )}
    </Router>
  );
}

export default App;
