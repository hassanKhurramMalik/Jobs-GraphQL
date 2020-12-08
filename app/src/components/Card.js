import React from "react";
import { useHistory } from "react";

const Card = (props) => {
  let history = useHistory;
  return (
    <div>
      {props.jobs.title}
      <button
        onClick={() => {
          console.log(history);
        }}
      >
        Details
      </button>
      <span>{props.jobs.company.name}</span>
      <div>
        <ul>
          {props.jobs.cities.map((cities) => (
            <li key={cities.id}>{cities.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
