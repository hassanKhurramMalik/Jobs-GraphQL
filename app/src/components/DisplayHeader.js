import React from "react";

const DisplayHeader = (props) => {
  return (
    <div>
      <h1 className="details">{props.header}</h1>
    </div>
  );
};

export default DisplayHeader;
