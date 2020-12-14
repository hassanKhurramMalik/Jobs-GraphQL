import React from "react";
import DisplayHeader from "../components/DisplayHeader";
import DisplayDetails from "../components/DisplayDetails";
import DisplayCities from "../components/DisplayCities";
import DisplayDescription from "../components/DisplayDescription";
import styled from "styled-components";
import "../styles/details.css";

const Button = styled.button`
  font-family: Hack, monospace;
  background: #d3d3d3;
  cursor: pointer;
  font-size: 1.5em;
  border: 0;
  transition: all 0.5s;
  border-radius: 5px;
  width: auto;
  position: relative;
  min-width: 158px;
  color: ${(props) => props.inputC || "black"};
`;
const Details = (props) => {
  const job = props.history.location.state.detail;
  return (
    <div className="card">
      <div className="card-inner">
        <DisplayHeader header="Details" />
        <DisplayDetails content={job.title} />
        <DisplayDetails content={job.company.name} />
        <DisplayCities content={job.cities} />
        <DisplayDescription content={job.description} />
        <Button
          onClick={() => {
            window.open(job.applyUrl);
          }}
          inputC="#2c2c2c"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Details;
