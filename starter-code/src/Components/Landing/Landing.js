import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <div>
        <Navbar />
        <div class="header">
          <h1 class="landing-title">Say hello to ReactJS</h1>
          <p class="info">
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </p>
          <button>Awesome!</button>
        </div>
        <div className="container">
          <div>
            <img src="./images/icon1.png" />
            <h1>Declarative</h1>
            <p className="id">
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div>
            <img src="./images/icon2.png" />
            <h1>Components</h1>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="./images/icon3.png" />
            <h1>Signle-Way</h1>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src="./images/icon4.png" />
            <h1>JSX</h1>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
