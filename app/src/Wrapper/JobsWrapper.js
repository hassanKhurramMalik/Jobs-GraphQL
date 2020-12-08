import React from 'react';

const JobsWrapper=(props)=>{
  return (
    <div>
          <div>
            <p>{props.jobs.title}</p>
            <span>{props.jobs.company.name}</span>
          </div>
        <div>
          <ul>
            {props.jobs.cities.map((cities) => (
              <li key={cities.id}>{cities.name}</li>
            ))}
          </ul>
</div>
        </div>
  );
}

export default JobsWrapper
