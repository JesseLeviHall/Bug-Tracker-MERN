import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/viewBugs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Views/SIdebar/sideBar";
import CreateBug from "./Views/Components/Bug Create & Edit/bugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";
import Tests from "./Views/Components/Tests";

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
            <Route path="/" exact>
              <Tests />
            </Route>
            <Route path="/viewbugs">
              {" "}
              <ViewBugPage />
            </Route>
            <Route path="/createBug">
              <CreateBug title={"Create Bug"} />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
