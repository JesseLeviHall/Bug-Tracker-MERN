import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";
import BugCard from "../Components/Bug Card/BugCard";

export default function ViewBugs() {
  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);

  useEffect(() => {
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [bugStatus, dispatch]);

  let content;
  if (bugStatus === "loading") {
    content = <p> Loading...</p>;
  } else if (bugStatus === "succeeded") {
    content = bugs.map((bug) => <BugCard key={bug._id} bug={bug} />);
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="container-sm">
      <h2 className="text-center mt-5">These are all the bugs</h2>
      <Row>{content}</Row>
    </div>
  );
}
