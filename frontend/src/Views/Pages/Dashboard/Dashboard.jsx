import React, { useEffect } from "react";
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
import Pie from "../../Components/Charts/Pie";
import LineChart from "../../Components/Charts/Line";
import Bar from "../../Components/Charts/Bar";

export default function Dashboard() {
  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);

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
      <div style={{ height: "inherit" }}>
        <Row>
          <Col className="mt-5" md="4">
            <DashboardItem priority="1" count={highCount.length} />
          </Col>
          <Col className="mt-5" md="4">
            <DashboardItem priority="2" count={midCount.length} />
          </Col>
          <Col className="mt-5" md="4">
            <DashboardItem priority="3" count={lowCount.length} />
          </Col>
        </Row>
        <Row>
          <Col className="mt-5" md="6">
            <Pie legendVisiblity height="full" />
          </Col>
          <Col className="mt-5" md="6">
            <LineChart />
          </Col>
        </Row>
        <Row>
          <Col className="mt-5" md="12">
            <Bar />
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <br />
        </Row>
      </div>
    );
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => {
      return bug.priority === priority && bug.complete === false;
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
