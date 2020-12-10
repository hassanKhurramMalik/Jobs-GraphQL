import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/card.css";


class Card extends React.Component {
  render() {
    return (
      <div>
        <div
          className="cardWrapper"
          onClick={() => {
            this.props.history?.push({
              pathname: `./details/${this.props.jobs.id}`,
              state: { detail: this.props.jobs },
            });
          }}
        >
          <div className="cardImg">
            <div className="imgLeft">
              <img
                src="https://t2342715.p.clickup-attachments.com/t2342715/7782615c-0973-4363-9fdb-3db37cc6f73e/placeholder.png"
                alt="Pic"
              />
            </div>
          </div>
          <div className="cardText">
            <div className="text">
              <b>Title:</b> {this.props.jobs.title}
            </div>
            <br />
            <div className="textEllipsis">
              <b>Desc:</b> {this.props.jobs.description}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default withRouter(Card);

/*<ul>
              {this.props.jobs.cities.map((cities) => (
                <li key={cities.id}>{cities.name}</li>
              ))}
            </ul>*/
