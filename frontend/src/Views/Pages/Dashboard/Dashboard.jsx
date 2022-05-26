import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import Issue from "../../Components/DashboardItem/Issue";
import {
  fetchBugs,
  getBugsError,
  getBugsStatus,
  selectAllBugs,
} from "../../../Controllers/Reducers/bugSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);
  const browserHistory = useHistory();

  let content;
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  if (bugStatus === "loading") {
    content = <p> Loading...</p>;
  } else if (bugStatus === "succeeded") {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
    content = (
      <Row>
        <Col className="mt-5" md="4">
          <Issue clicked={redirect} priority="1" count={highCount.length} />
        </Col>
        <Col className="mt-5" md="4">
          <Issue clicked={redirect} priority="2" count={midCount.length} />
        </Col>
        <Col className="mt-5" md="4">
          <Issue clicked={redirect} priority="3" count={lowCount.length} />
        </Col>
      </Row>
    );
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  function redirect() {
    browserHistory.push("/viewbugs");
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

  return <div className="container-sm">{content}</div>;
}
