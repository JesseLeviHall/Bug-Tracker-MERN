import React, { useEffect } from "react";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../Controllers/Reducers/bugSlice";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../Components/Navagation/Navigation";
import MyBugCard from "../Components/MyBugCard";
import { Row } from "reactstrap";

export default function MyBugs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [bugStatus, dispatch]);

  const myBugs = bugs.filter((bug) => bug.assigned === user.userName);

  if (myBugs.length === 0) {
    return (
      <div className="container-fluid">
        <Navigation />
        <h2
          style={{ height: "100vh", color: "#fff" }}
          className="text-center mt-5">
          No bugs are assigned for you to work on right now
        </h2>
      </div>
    );
  }

  let content;
  if (bugStatus === "loading") {
    content = <p className="text-center mt-5"> Loading...</p>;
  } else if (bugStatus === "succeeded") {
    content = myBugs.map((bug) => <MyBugCard key={bug._id} bug={bug} />);
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="container-sm">
      <Navigation />
      <h2 style={{ color: "#fff" }} className="text-center mt-5">
        Bugs I'm working on
      </h2>
      <Row>{content}</Row>
    </div>
  );
}
