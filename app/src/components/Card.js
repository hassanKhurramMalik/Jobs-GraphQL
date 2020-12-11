import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/card.css";
import reactImg from "../assets/react.jpeg";
import goImg from "../assets/go.jpg";
import djangoImg from "../assets/django.png";
import backendImg from "../assets/backend.jpg";
import fullstackImg from "../assets/fullstack.jpg";
import iosImg from "../assets/ios.jpg";
import nodeImg from "../assets/node.png";
import androidImg from "../assets/android.jpg";
import apiImg from "../assets/api.jpg";
import deepImg from "../assets/deep.jpg";
import javaImg from "../assets/java.png";

class Card extends React.Component {
  render() {
    let img, imgStyle;
    const title = this.props.jobs.title;
    if (title.includes("React")) {
      img = reactImg;
      imgStyle = { backgroundColor: "#202020" };
    } else if (title.includes("Go")) {
      img = goImg;
      imgStyle = { backgroundColor: "#EEECEC" };
    } else if (title.includes("Django")) {
      img = djangoImg;
      imgStyle = { backgroundColor: "#BCB6B5" };
    } else if (
      title.includes("Fullstack") ||
      title.includes("Full Stack") ||
      title.includes("Full-stack") ||
      title.includes("Full-Stack")
    ) {
      img = fullstackImg;
      imgStyle = { backgroundColor: "	#484848" };
    } else if (title.includes("iOS")) {
      img = iosImg;
      imgStyle = { backgroundColor: "#00688B" };
    } else if (title.includes("Node")) {
      img = nodeImg;
      imgStyle = { backgroundColor: "white" };
    } else if (title.includes("Android")) {
      img = androidImg;
      imgStyle = { backgroundColor: "white" };
    } else if (title.includes("API")) {
      img = apiImg;
      imgStyle = { backgroundColor: "white" };
    } else if (title.includes("Java Developer")) {
      img = javaImg;
      imgStyle = { backgroundColor: "white" };
    } else if (title.includes("Deep Learning")) {
      img = deepImg;
      imgStyle = { backgroundColor: "#00688B" };
    } else if (title.includes("Backend")) {
      img = backendImg;
      imgStyle = { backgroundColor: "#0C090A" };
    } else {
      img =
        "https://t2342715.p.clickup-attachments.com/t2342715/7782615c-0973-4363-9fdb-3db37cc6f73e/placeholder.png";
      imgStyle = { backgroundColor: "#800000" };
    }
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
          <div className="cardImg" style={imgStyle}>
            <div className="imgLeft">
              <img src={img} alt="Pic" />
            </div>
          </div>
          <div className="cardText">
            <div className="text">
              <b>Title:</b> {this.props.jobs.title}
            </div>
            <br />
            <div className="textEllipsis">
              <b>Description:</b> {this.props.jobs.description}
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
