import React from "react";
import Issue from "../../Components/Dashboard/Issue";

export default (props) => {
  return (
    <div className="container-sm">
      <Issue priority="1" count="10" />
    </div>
  );
};
