import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";
import BugCard from "../Components/Bug Card/bugCard";
import BugView from "../Components/Bug View/BugView";

export default function ViewBugs() {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false,
  });

  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);

  useEffect(() => {
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [bugStatus, dispatch]);

  function BugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name,
    });
  }

  let content;
  if (bugStatus === "loading") {
    content = <p> Loading...</p>;
  } else if (bugStatus === "succeeded") {
    content = bugs.map((bug) => (
      <BugCard key={bug._id} bugs={bugs} clicked={BugClicked} />
    ));
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="container-sm">
      <h2 className="text-center mt-4">These are all the bugs</h2>
      <Row>{content}</Row>

      {DISPLAY_BUG.isDisplayed && (
        <BugView
          clicked={BugClicked}
          bug={bugs.filter((bug) => {
            return bug.name === DISPLAY_BUG.name;
          })}
        />
      )}
    </div>
  );
}
