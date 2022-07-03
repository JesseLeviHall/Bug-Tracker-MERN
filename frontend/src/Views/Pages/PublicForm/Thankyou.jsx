import React from "react";
import "./publicform.css";
import { Row, Card, CardHeader, CardFooter, CardText } from "reactstrap";

const Thankyou = () => {
  return (
    <div id="container" className="container-fluid">
      <Row className="mx-5">
        <Card color="info" outline id="card2">
          <CardHeader id="cardheader" tag="h4">
            Thank You
          </CardHeader>
          <CardText id="cardtext">
            Thank for reporting the issue so we can resolve it as soon as
            possible. <br /> <br /> have a great rest of your day
          </CardText>
          <CardFooter className="icon-text mb-3">
            <i className="icon">-Dev Team</i>
          </CardFooter>
        </Card>
      </Row>
    </div>
  );
};

export default Thankyou;
