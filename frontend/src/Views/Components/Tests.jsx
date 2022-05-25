import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";

export default function Home() {
  const dispatch = useDispatch();

  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);
  console.log(bugs);

  useEffect(() => {
    if (bugStatus === "idle") {
    }
    dispatch(fetchBugs());
  }, [bugStatus, dispatch]);

  let content;
  if (bugStatus === "loading") {
    content = <p> Loading...</p>;
  } else if (bugStatus === "succeeded") {
    content = bugs.map((bug) => <p key={bug._id}>{bug._id}</p>);
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>These are the bugs</h2>
      {content}
    </div>
  );
}
