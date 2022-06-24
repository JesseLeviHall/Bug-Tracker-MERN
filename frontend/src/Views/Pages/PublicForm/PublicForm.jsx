import React from "react";
import "./publicform.css";

const PublicForm = () => {
  return (
    <div id="container" className="container-fluid full-width">
      <h1>Did You Experience A Website Issue?</h1>
      <p>
        We appologize for the problem. Please let us know what happened so we
        can fix it.
      </p>
      <div id="form-container">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>
            Fill up the form and we will resolve the issue as soon as possible
          </p>
          <div className="icon-text">
            <i className="icon"></i>
            <span>Contact Text</span>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
};

export default PublicForm;
