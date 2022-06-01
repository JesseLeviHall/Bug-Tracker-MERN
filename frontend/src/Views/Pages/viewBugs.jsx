import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";
import BugCard from "../Components/Bug Card/bugCard";

//get state from slice in every component?

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
  return (
    <div className="page-container">
      {bugs.map((bug, key) => {
        <BugCard key={key} bug={bug} clicked={BugClicked} />;
      })}
      {DISPLAY_BUG.isDisplayed && (
        <bugView
          clicked={BugClicked}
          bug={bugs.filter((bug) => {
            return bug.name == DISPLAY_BUG.name;
          })}
        />
      )}
    </div>
  );
}
