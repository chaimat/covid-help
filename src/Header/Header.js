import React from "react";
import "./Header.css";
import { Jumbotron, Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron
          fluid
          style={{
            background: "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)",
          }}
        >
          <Container>
            <h1>COVID Help</h1>
            <h4>
              Get easy access to Oxygen Cylinders, Beds, ICU, tiffin services
              near you
            </h4>
          </Container>
        </Jumbotron>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="linear-gradient(to right, #33ccff 0%, #ff99cc 100%)"
            fill-opacity="1"
            d="M0,64L1440,0L1440,0L0,0Z"
          ></path>
        </svg> */}
      </div>
    );
  }
}

export default Header;
