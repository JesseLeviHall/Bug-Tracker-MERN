import React, { useState } from "react";
import ViewSection from "./component/bugViewSection";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Reducers/bugSlice";
import EditPanel from "../edit delete/EditPanel";
import EditBug from "../Bug Create & Edit/bugForm";

export default function BugView(props) {
  const dispatch = useDispatch();

  const [displayEdit, setDisplayEdit] = useState(false);

  function editClicked() {
    setDisplayEdit(!displayEdit);
  }

  // for button  onClick={() => {
  // dispatch(markComplete());
  //  }}>

  function deleteClicked() {}

  return (
    <div className="container">
      <Button close onClick={props.clicked}>
        Close
      </Button>
      <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
      <h1>{props.bug.name}</h1>
      <ViewSection title="Details" info={props.bug.details} />
      <ViewSection title="Steps" info={props.bug.steps} />
      <ViewSection title="Priority" info={props.bug.priority} />
      <ViewSection title="Creator" info={props.bug.creator} />
      <ViewSection title="Website" info={props.bug.webpage} />
      <ViewSection title="Time Created" info={props.bug.time} />
      <Button>Mark Complete</Button>
      {displayEdit && (
        <EditBug close={editClicked} title="Edit Bug" bug={props.bug} />
      )}
    </div>
  );
}
