import React from "react";

const DisplayDescription = (props) => {
  return (
    <div>
      <details>
        <summary className="heading">Description</summary>
        <p className="content">{props.content}</p>
      </details>
      <br />
    </div>
  );
};

export default DisplayDescription;
