import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Featured from "./components/featured";
import Info from "./components/info";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="info">
          <Info />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
