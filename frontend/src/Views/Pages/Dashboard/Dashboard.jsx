import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import Issue from "../../Components/Dashboard/Issue";
import { getBugs } from "../../../Controllers/Reducers/bugSlice";

export default () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
  const browserHistory = useHistory();

  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;
  if (bugs != undefined) {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
  }

  function redirect() {
    browserHistory.push("/viewbugs");
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => {
      return bug.priority == priority;
    });
  }

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs == undefined]);

  return (
    <div className="container-sm">
      <Row>
        <Col className="mt-5" md="6">
          <Issue priority="1" count={highCount.length} clicked={redirect} />
        </Col>
        <Col className="mt-5" md="6">
          <Issue clicked={redirect} priority="2" count={midCount.length} />
        </Col>
        <Col className="mt-5" md="6">
          <Issue clicked={redirect} priority="3" count={lowCount.length} />
        </Col>
      </Row>
    </div>
  );
};
