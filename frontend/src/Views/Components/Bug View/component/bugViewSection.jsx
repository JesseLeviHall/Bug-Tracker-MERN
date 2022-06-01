import React from "react";

export default function bugViewSection(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
}
