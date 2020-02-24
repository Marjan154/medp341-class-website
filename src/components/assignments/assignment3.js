import React, { Component } from "react";
import axios from "axios";
require("dotenv").config();
const gkey = process.env.REACT_APP_GIF_API_KEY;
class gifHoroscopeAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "virgo",
      horosocope: [],
      gifHoroscopes: []
    };
    this.gifContainer = {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      textAlign: "center"
    };

    this.gifContainerOuter = {
      display: "flex",
      padding: "25px"
    };
  }

  // Make api call with input horoscope sign and store horoscope sentences in state. Get gifs after settign state.
  getHoroscope = async () => {
    // This api gives 500 internal server error when you make a request. Tried to debug, couldn't figure it out

    // const { sign } = this.state;
    // axios
    //   .get(
    //   `https://cors-anywhere.herokuapp.com/https://horoscope-free-api.herokuapp.com/?time=today&sign=cancer`, { headers: {"Access-Control-Allow-Headers", "x-requested-with, x-requested-by"} }
    //   )
    //   .then(data => console.log("data", data));

    // instead uses a static string :(
    const horoscope =
      "Setting unrealistic targets would come in the way of assessing your progress. It is important for you to empower yourself with new technical skills to enhance your career prospects. Shared activities will offer you more pleasure. Sudden romantic encounter might confuse you. You will attain a bloom in health on sharing happiness with others. Your Lucky Color is Purple. Your Lucky number is 11.";

    this.setState({ horoscope: horoscope.split(".") }, async () => {
      console.log(horoscope.split("."));
      await this.getGifs();
    });
  };
  // use giphy api to get gifs for each horoscope sentence
  getGifs = async () => {
    let gifs = this.state.horoscope.map(async hor => {
      // truncate "Your lucky is... to prevent duplicate gifs"
      const h = hor.includes("Your Lucky Color is")
        ? hor.replace("Your Lucky Color is ", "")
        : hor.replace("Your Lucky number is ", "");
      let gif = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${h}&limit=1&api_key=${gkey}`
      );
      return (
        <div style={{ margin: "10px" }}>
          <h4>{hor}. </h4>
          {gif.data.data[0] && (
            <img src={gif.data.data[0].images.original.url}></img>
          )}
        </div>
      );
    });
    // resolve all promises from gif async calls and then store in state
    await Promise.all(gifs).then(gifs =>
      this.setState({ gifHoroscopes: gifs })
    );
  };
  render() {
    return (
      <div>
        <h1>Gif Horoscope</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({ sign: e.target.sign.value }, () =>
              this.getHoroscope()
            );
          }}
        >
          Enter your horoscope sign:
          <input
            type="text"
            className="form-control form-control-lg"
            name={"sign"}
            onChange={this.inputHandler}
          />
          <button>Submit</button>
        </form>
        <div style={this.gifContainer}>{this.state.gifHoroscopes}</div>
      </div>
    );
  }
}

export default gifHoroscopeAPI;
