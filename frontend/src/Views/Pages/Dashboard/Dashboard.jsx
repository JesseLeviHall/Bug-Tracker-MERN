import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import Navigation from "../../Components/Navagation/Navigation";
import DashboardItem from "../../Components/DashboardItem/DashboardItem";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../../Controllers/Reducers/bugSlice";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);
  const history = useNavigate();

  let content;
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  if (bugStatus === "loading") {
    content = <p className="m-5 text-center"> Loading........</p>;
  } else if (bugStatus === "succeeded") {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
    content = (
      <>
        <Row>
          <Col className="mt-5" md="4">
            <DashboardItem
              clicked={redirect}
              priority="1"
              count={highCount.length}
            />
          </Col>
          <Col className="mt-5" md="4">
            <DashboardItem
              clicked={redirect}
              priority="2"
              count={midCount.length}
            />
          </Col>
          <Col className="mt-5" md="4">
            <DashboardItem
              clicked={redirect}
              priority="3"
              count={lowCount.length}
            />
          </Col>
        </Row>
      </>
    );
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  function redirect() {
    history("/viewbugs");
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => {
      return bug.priority === priority;
    });
  }

  useEffect(() => {
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [bugStatus, dispatch]);

  return (
    <div className="container-sm">
      <Navigation />
      {content}
    </div>
  );
}
