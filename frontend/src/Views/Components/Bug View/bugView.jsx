import React, { useState } from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Models/bugModel";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Reducers/bugSlice";
import EditPanel from "../edit delete/EditPanel";
import EditBug from "../Bug Create & Edit/bugForm";

export default BugView = (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);

  const [displayEdit, setDisplayEdit] = useState(false);

  function editClicked() {
    setDisplayEdit(!displayEdit);
  }

  function deleteClicked() {}

  return (
    <div className="container">
      <Button close onClick={props.clicked}>
        Close
      </Button>
      <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
      <h1>{bug.name}</h1>
      <ViewSection title="Details" info={bug.details} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App Version" info={bug.version} />
      <ViewSection title="Time Created" info={bug.time} />
      <Button
        onClick={() => {
          dispatch(markComplete());
        }}>
        Mark Complete
      </Button>
      {displayEdit && (
        <EditBug close={editClicked} title="Edit Bug" bug={bug} />
      )}
    </div>
  );
};
