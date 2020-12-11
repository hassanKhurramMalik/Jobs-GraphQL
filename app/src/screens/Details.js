import React from "react";
import "../styles/details.css";

class Details extends React.Component {
  render() {
    const job = this.props.history.location.state.detail;
    return (
      <div className="card">
        <div className="card-inner">
          <h1 className="details">Details</h1>
          <h3 className="heading">Title</h3>
          <div className="content">{job.title}</div>
          <br />
          <h3 className="heading">Company</h3>
          <div className="content">{job.company.name}</div>
          <br />
          <h3 className="heading">Cities</h3>
          <div className="content">
            <ul>
              {job.cities.map((city) => (
                <li key={city.name}>{city.name}</li>
              ))}
            </ul>
          </div>
          <br />
          <details>
            <summary className="heading">Description</summary>
            <p className="content">{job.description}</p>
          </details>
          <br />
          <button onClick={() => window.open(job.applyUrl)} className="button">
            Apply
          </button>
        </div>
      </div>
    );
  }
}

export default Details;

//<button className="button" onClick={() => window.open(job.applyUrl)}>
//          Apply
//      </button>
