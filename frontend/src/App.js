import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/ViewAllBugs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BugForm from "./Views/Components/Forms/BugForm";
import EditBugForm from "./Views/Components/Forms/EditBugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";
import Register from "./Views/Pages/Register";
import MyBugs from "./Views/Pages/MyBugs";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/viewbugs">
            <ViewBugPage />
          </Route>
          <Route path="/create">
            <BugForm />
          </Route>
          <Route path="/editbug/:bugId">
            <EditBugForm />
          </Route>
          <Route path="/mybugs">
            <MyBugs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
