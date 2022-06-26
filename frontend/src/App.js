import React from "react";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/ViewAllBugs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BugForm from "./Views/Components/Forms/BugForm";
import EditBugForm from "./Views/Components/Forms/EditBugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";
import Register from "./Views/Pages/Register";
import MyBugs from "./Views/Pages/MyBugs";
import PrivateRoute from "./Views/Components/PrivateRoute";
import PublicForm from "./Views/Pages/PublicForm/PublicForm";
import Thankyou from "./Views/Pages/PublicForm/Thankyou";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/publicform" exact element={<PublicForm />} />
          <Route path="/thankyou" exact element={<Thankyou />} />
          <Route path="/user/login" exact element={<Login />} />
          <Route path="/user/register" exact element={<Register />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route path="/viewbugs" element={<PrivateRoute />}>
            <Route path="/viewbugs" element={<ViewBugPage />} />
          </Route>

          <Route path="/create" element={<PrivateRoute />}>
            <Route path="/create" element={<BugForm />} />{" "}
          </Route>

          <Route path="/editbug/:bugId" element={<PrivateRoute />}>
            <Route path="/editbug/:bugId" element={<EditBugForm />} />{" "}
          </Route>

          <Route path="/mybugs" element={<PrivateRoute />}>
            <Route path="/mybugs" element={<MyBugs />} />{" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
