import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>MEDP 341</h1>
        <div style={{ margin: "10%" }}>
          <h2>Assignments</h2>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
          <Link to="/assignment1">
            <li>Assignment 1</li>
          </Link>
          <Link to="/assignment2">
            <li>Assignment 2</li>
          </Link>
          <Link to="/assignment3">
            <li>Assignment 3</li>
          </Link>
          <Link to="/assignment4">
            <li>Assignment 4</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
