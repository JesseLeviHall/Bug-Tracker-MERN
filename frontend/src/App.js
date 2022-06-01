import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/ViewAllBugs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Views/SIdebar/sideBar";
import BugForm from "./Views/Components/Bug Create & Edit/BugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/viewbugs">
              {" "}
              <ViewBugPage />
            </Route>
            <Route path="/create">
              <BugForm title={"Report A Problem"} />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
