import React from "react";

const Details = (props) => {
  return <div>Id: {props.match.params.id}</div>;
};

export default Details;
