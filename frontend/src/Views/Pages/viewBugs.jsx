import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../Controllers/Reducers/bugSlice.js";
import BugCard from "../Components/Bug Card/bugCard";

export default function ViewBugs() {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  function BugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name,
    });
  }
  return (
    <div className="page-container">
      {entities.map((bug, key) => {
        <BugCard key={key} bug={bug} clicked={BugClicked} />;
      })}
      {DISPLAY_BUG.isDisplayed && (
        <bugView
          clicked={BugClicked}
          bug={entities.filter((bug) => {
            return bug.name == DISPLAY_BUG.name;
          })}
        />
      )}
    </div>
  );
}
