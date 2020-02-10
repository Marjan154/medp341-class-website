import React, { Component } from "react";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Assignment1 from "./components/assignments/assignment1";
import ShuffleDeck from "./components/assignments/assignment2/Assignment2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/assignment1" component={Assignment1} />
          <Route exact path="/assignment2" component={ShuffleDeck} />
        </Router>
      </div>
    );
  }
}

export default App;
