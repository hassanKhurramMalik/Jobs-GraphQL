import React from "react";

const DisplayDetails = (props) => {
  return (
    <div>
      <h3 className="heading">Title</h3>
      <div className="content">{props.content}</div>
      <br />
    </div>
  );
};

export default DisplayDetails;
