import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Assignment1 from "./components/assignments/assignment1";
import Assignment3 from "./components/assignments/assignment3";
import ShuffleDeck from "./components/assignments/assignment2/Assignment2";
import Assignment4 from "./components/assignments/Assignment4";
import Assignment6 from "./components/assignments/Assignment6/Assignment6";
import Blogs from "./components/blogs";
import "./App.css";
import Assignement7 from "./components/assignments/Assignment7";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/assignment1" component={Assignment1} />
          <Route exact path="/assignment2" component={ShuffleDeck} />
          <Route exact path="/assignment3" component={Assignment3} />
          <Route exact path="/assignment4" component={Assignment4} />
          <Route exact path="/assignment6" component={Assignment6} />
          <Route exact path="/assignment7" component={Assignement7} />
        </Router>
      </div>
    );
  }
}

export default App;
