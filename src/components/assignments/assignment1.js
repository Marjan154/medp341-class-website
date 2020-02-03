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

                <h2 style={{ margin: "50px", textAlign: "left" }}>Reading Response</h2>
                <p style={{ margin: "50px", textAlign: "left" }}>
                    Laurel Schwulst talks about how important it is for the web to be free and should be an outlet for individuals to express themselves in "my website is a shifting house next to a river of knowledge". She talks anout how important it tis for the people to take back the web from big, self serving corporations that have practically taken over the web. I find that I sympathize with these ideas. I always admired the artistic and freeform quality of the web. It is such an important platform that can be shaped and painted to reflect any person. Furthermore, I really like how the author likens the creation of a website to that of a room, or plant or a shelf. Personally, I think when I make a website, it is a combination of building it as a "puddle" and as a "room". I often find myself creating websites in large bursts of inspiration, rather than, periodic, constant change like a puddle. I also tend to rearrange my website like I would rearrange my room. moving large parts of it around until I find some harmony in its combinations. I had never given much thought to these varying approaches of making a website before, and I realize how different minds can work.
                </p>
                <p style={{ margin: "50px", textAlign: "left" }}>
                    The second article, in shocking contrast to the first, focuses on some of the oldest, most static but best practices of web design. We can see the skeleton of most old wesbites, and they look like copies of eachother with various texts. However, these not so amazing websites are the building blocks of the web; The core of a good and sound website before all of its added embellishments. The authors emphasis of these less flashy but critical web design practices surely made me question my own lacking form. I tend to jump to the fun and colorful aspects of the website, thinking to leave the smaller html design practices for last, or considering them optional. However while the website mahy appear nice, on the inside, it is susceptible ti breaking and would result in future problems.

                </p>
                <p style={{ margin: "50px", textAlign: "left" }}> The Jodi website at first glance is what I would consider web art. I really love seeing the web utilized it creative ways, and this website did that. Every link I clicked showed me something unexpected, and it had a way of drawing me in, even though I could not understand it. The use of colors, characters, animation and images, strewn together in a clever way makes traversing through the website a fun and exciting journey.</p>
                <h2 style={{ margin: "50px", textAlign: "left" }}>Inspector Tools practice</h2>
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