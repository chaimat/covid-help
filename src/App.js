import React from "react";

import Home from './Home/Home'

class App extends React.Component {
  render() {
    return (
      <div style={{ minHeight: "100%", position: "relative" }}>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
