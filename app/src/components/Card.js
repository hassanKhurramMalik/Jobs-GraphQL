import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/card.css";
import { Row, Col } from "react-flexbox-grid";
import getImage from "../utils/GetImage";

const Card = (props) => {
  let date = new Date(props.jobs.createdAt).toDateString();
  const img = getImage(props.jobs.title);
  return (
    <div className="parent">
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
          <Col xs={12} md={6}>
            <div className="imgLeft">
              <img src={img} alt="Pic" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <div className="text">{props.jobs.title}</div>
              <div className="textEllipsis">{props.jobs.description}</div>
              <div className="date">{date}</div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
    </div>
  );
};

export default withRouter(Card);
