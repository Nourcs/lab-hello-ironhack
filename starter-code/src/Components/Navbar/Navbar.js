import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar">
        <img src="./images/ironhack-logo.svg" className="float-left" />
        <img src="./images/menu-top.svg" className="float-right" />
      </div>
    );
  }
}

export default Navbar;
