import React, { Component } from 'react';
class Assignment1 extends Component {
    state = {}

    render() {
        let styles = {
            maxWidth: "700px",
        }
        return (
            <div>
                <h1>Assignment 1</h1>
                <p style={{ margin: "50px", textAlign: "left" }}>
                    Using the inspector tools I was able to make various changes on youtube.com. I tried both directly editing the text and findinf divs to reference to from the source code, using javascript to make queries to change things like background color, and using the area with the styles description to update styling for icon colors and font. In summary, I have changed font family/sizing/colors, background and icon colors, added borders and played with padding through a variety of means using the inspector tools.
                </p>
                <div style={{ padding: "50px" }}>
                    <img style={styles} src={require("../../images/a1-4.png")}></img>
                    <img style={styles} src={require("../../images/a1-1.png")}></img>
                    <img style={styles} src={require("../../images/a1-2.png")}></img>
                    <img style={styles} src={require("../../images/a1-3.png")}></img>

                </div>

                <p style={{ margin: "50px", textAlign: "left" }}>
                    Over here, I also worked on editing w3 schools wesbite. I added in background images, changed buttons to have rounded corners, and changed the colors and bacgrounds and outlines associated with the tables only.
                </p>
                <div style={{ padding: "50px" }}>
                    <img style={styles} src={require("../../images/a1-5.png")}></img>
                    <img style={styles} src={require("../../images/a1-10.png")}></img>

                </div>
            </div>);
    }
}

export default Assignment1;