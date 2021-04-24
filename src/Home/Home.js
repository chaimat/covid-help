import React from "react";
import "./Home.css";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "../Header/Header";
import Cities from "../Cities/Cities";
import Options from "../Options/Options.js";
import Data from "../Data/Data"

const history = createBrowserHistory();

class Home extends React.Component {
  state = { city: "agra", info: "oxy" };

  updateCity = async (city) => {
    await this.setState({ city });
    console.log(this.state.city);
    history.push('/options')
  };
  updateInfo = async (info) => {
    await this.setState({ info });
    console.log(this.state.info);
    history.push('/data')
  };

  render() {
    return (
      <div style={{ minHeight: '100vh'}}>
        <Router history={history}>
          <Header />
          <Route
            path="/"
            exact
            component={() => <Cities updateCity={this.updateCity} />}
          />
          <Route
            path="/options"
            exact
            component={() => <Options updateInfo={this.updateInfo} />}
          />
          <Route
            path="/data"
            exact
            component={() => <Data info={this.state.info} city={this.state.city}/>}
          />
        </Router>
      </div>
    );
  }
}

export default Home;
