import React from "react";
import "./publicform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const PublicForm = () => {
  return (
    <div id="container" className="container-sm ">
      <h1 className="mt-5">Did You Experience A Website Issue?</h1>
      <h2 className=" mb-5">
        We appologize for the problem. Please let us know what happened so we
        can fix it.
      </h2>
      <div id="message-container">
        <div className="contact-info">
          <h4>Send Us Information</h4>
          <p>
            Fill in the form and we will resolve the issue as soon as possible.
          </p>
          <div className="icon-text">
            <i className="icon">-Dev Team</i>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
};

export default PublicForm;
