import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>MEDP 341</h1>
                <div style={{ margin: "10%" }}>
                    <h2>Assignments</h2>
                    <Link to="/assignment1"><li>Assignment 1</li></Link>
                </div>
            </div>
        );
    }
}

export default Home;