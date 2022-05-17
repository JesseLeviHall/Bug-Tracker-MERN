import React from "react";
import { Row, Col } from "reactstrap";
import Issue from "../../Components/Dashboard/Issue";

export default () => {
  return (
    <div className="container-sm">
      <Row>
        <Col className="mt-5" md="6">
          <Issue priority="1" count="10" />
        </Col>
        <Col className="mt-5" md="6">
          <Issue priority="2" count="10" />
        </Col>
        <Col className="mt-5" md="6">
          <Issue priority="3" count="10" />
        </Col>
      </Row>
    </div>
  );
};
