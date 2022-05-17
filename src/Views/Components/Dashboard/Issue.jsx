import React from "react";
import Priority from "../../../Controllers/priorityController";

export default (props) => {
  const { level, color } = Priority(props.priority);
  return (
    <div className="container-sm">
      <div style={{ color: color }}>
        <h2>Total: {level} </h2>
        <p>{props.count}</p>
      </div>
    </div>
  );
};
