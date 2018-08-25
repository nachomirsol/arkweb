import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/Header";
import Featured from "./components/featured";
import Info from "./components/info";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <Info/>
      </div>
    );
  }
}

export default App;
