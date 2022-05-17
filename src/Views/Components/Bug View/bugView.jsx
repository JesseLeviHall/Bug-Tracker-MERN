import React from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Models/bugModel";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";
import EditPanel from "../edit delete/editPanel";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);

  function editClicked() {}

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
    </div>
  );
};
