import React from "react";

const DisplayCities = (props) => {
  return (
    <div>
      <h3 className="heading">Cities</h3>
      <div className="content">
        <ul>
          {props.content.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default DisplayCities;
