import React from "react";
import { Card } from "react-bootstrap";
class Options extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "center", margin: "1rem" }}
        >
          <Card
            bg="primary"
            text="light"
            style={{
              maxWidth: "25rem",
              margin: "0.5rem 0.5rem 0.5rem 0.5rem",
              cursor: "pointer",
            }}
            className="col-sm-6 col-12"
            onClick={() => this.props.updateInfo("oxy")}
          >
            <Card.Body style={{ margin: "auto" }}>
              <Card.Title>Oxygen Cylinders</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg="primary"
            text="light"
            style={{
              maxWidth: "25rem",
              margin: "0.5rem 0.5rem 0.5rem 0.5rem",
              cursor: "pointer",
            }}
            className="col-sm-6 col-12"
            onClick={() => this.props.updateInfo("icu")}
          >
            <Card.Body style={{ margin: "auto" }}>
              <Card.Title>ICU</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg="primary"
            text="light"
            style={{
              maxWidth: "25rem",
              margin: "0.5rem 0.5rem 0.5rem 0.5rem",
              cursor: "pointer",
            }}
            className="col-sm-6 col-12"
            onClick={() => this.props.updateInfo("beds")}
          >
            <Card.Body style={{ margin: "auto" }}>
              <Card.Title>Beds</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg="primary"
            text="light"
            style={{
              maxWidth: "25rem",
              margin: "0.5rem 0.5rem 0.5rem 0.5rem",
              cursor: "pointer",
            }}
            className="col-sm-6 col-12"
            onClick={() => this.props.updateInfo("tiff")}
          >
            <Card.Body style={{ margin: "auto" }}>
              <Card.Title>Tiffin Services</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Options;
