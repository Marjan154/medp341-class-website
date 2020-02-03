import React, { Component } from "react";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Assignment1 from "./components/assignments/assignment1"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/assignment1" component={Assignment1} />
        </Router>
      </div>
    );
  }
}

export default App;
