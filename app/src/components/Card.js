import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/card.css";
import { Row, Col } from "react-flexbox-grid";
import getImage from "../utils/GetImage";

const Card = (props) => {
  const img = getImage(props.jobs.title);
  return (
    <div>
      <div
        className="jobCard"
        onClick={() => {
          props.history?.push({
            pathname: `./details/${props.jobs.id}`,
            state: { detail: props.jobs },
          });
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="imgLeft">
              <img src={img} alt="Pic" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <div className="text">{props.jobs.title}</div>
              <br />
              <div className="textEllipsis">{props.jobs.description}</div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
    </div>
  );
};

export default withRouter(Card);
