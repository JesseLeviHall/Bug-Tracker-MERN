import React from "react";
import "./publicform.css";

const Thankyou = () => {
  return (
    <div id="container" className="container-sm ">
      <h1 id="h1" className="mt-5">
        Did You Experience A Website Issue?
      </h1>
      <h2 id="h2" className=" mb-5">
        We appologize for the problem.
      </h2>
      <div id="message-container">
        <div className="contact-info">
          <p id="p">
            Thank you very much for reporting the issue to us so we can resolve
            it as soon as possible. have a great rest of your day
          </p>
          <div className="icon-text">
            <i className="icon">-Dev Team</i>
          </div>
        </div>
        <p id="p">HERE</p>
      </div>
    </div>
  );
};

export default Thankyou;
