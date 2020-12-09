import React from "react";
import { Jumbotron, Container } from "reactstrap";

class Details extends React.Component {
  render() {
    const job = this.props.history.location.state.detail;
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Details</h1>
            <p className="lead">{job.title}</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Details;
