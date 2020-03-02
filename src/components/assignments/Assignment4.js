import React, { Component } from "react";
class Assignment4 extends Component {
  render() {
    return (
      <div>
        <h1>Assignment 4</h1>

        <p
          style={{
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "left",
            fontSize: "30px"
          }}
        >
          This week I watched a few videos and played around with wireshark.
          Last week we talked about how it is possible to use some of the tools
          we used in class to hack into another computer. I was curious about
          how that was possible. I used my personal Linux machine to use to hack
          into my personal Mac. I followed the steps in this
          <a href="https://www.youtube.com/watch?v=u3YKW9x9Wpg"> video</a>. This
          was super interesting to me. I did not know I could extract and read
          the contents of the data packets of post requests made. This also
          opened my eyes on the the importance of making sure a website is https
          instead of just http. In the past I did not think it was THAT
          important to pay money to make protocals secure, or atleast I could
          not understand excatly why based on articles that were heavy with
          technical jargon. Being able to capture hidden information first hand
          was valuable, and I will be extra aware next time I handle sensitive
          information on public wifi or http websites.
        </p>
        <p
          style={{
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "left",
            fontSize: "30px"
          }}
        >
          I also played around with pinging websites. I learned how useful this
          would be to debug servers. You can find out if there as an error with
          your code or if a server you are making requests to are down. By
          inspecting the hops and delays between hops, you can conclude where
          there might be an error.
        </p>
      </div>
    );
  }
}

export default Assignment4;
