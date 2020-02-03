import React from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import styles from "../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
    return (
        <div id="nav-container">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#About">About</Link>
                    </li>
                    <li>
                        <Link to="#Resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="#Contact">Contact</Link>
                    </li>
                    <li>
                        <a
                            href="https://ansarmarjan154.wixsite.com/website"
                            target="_blank"
                        >
                            Blog
            </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;