import React from "react";
import Login from "./Views/Pages/Login/Login";
import ViewBugPage from "./Views/Pages/ViewAllBugs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BugForm from "./Views/Components/Forms/BugForm";
import EditBugForm from "./Views/Components/Forms/EditBugForm";
import Dashboard from "./Views/Pages/Dashboard/Dashboard";
import Register from "./Views/Pages/Register";
import MyBugs from "./Views/Pages/MyBugs";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/user/login" exact element={<Login />} />
          <Route path="/user/register" exact element={<Register />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/viewbugs" exact element={<ViewBugPage />} />
          <Route path="/create" exact element={<BugForm />} />
          <Route path="/editbug/:bugId" exact element={<EditBugForm />} />
          <Route path="/mybugs" exact element={<MyBugs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
