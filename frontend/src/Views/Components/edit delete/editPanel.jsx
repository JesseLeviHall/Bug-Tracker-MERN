import React from "react";
import { Button } from "reactstrap";

export default EditPanel = (props) => {
  return (
    <div>
      <Button onClick={props.editClicked}>Edit</Button>
      <Button onClick={props.deleteClicked}>Delete</Button>
    </div>
  );
};
