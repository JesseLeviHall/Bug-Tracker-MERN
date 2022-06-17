import React from "react";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/ViewAllBugs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BugForm from "./Views/Components/Forms/BugForm";
import EditBugForm from "./Views/Components/Forms/EditBugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";
import Register from "./Views/Pages/Register";
import MyBugs from "./Views/Pages/MyBugs";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/user/login" exact component={Login} />
          <Route path="/user/register" exact component={Register} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/viewbugs" exact component={ViewBugPage} />
          <Route path="/create" exact component={BugForm} />
          <Route path="/editbug/:bugId" exact component={EditBugForm} />
          <Route path="/mybugs" exact component={MyBugs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
