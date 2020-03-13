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
    let signs = [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces"
    ];
    let inputs = signs.map(sign => {
      return (
        <div>
          <input type="radio" id={sign} name="sign" value={sign} />
          <label for={sign}>{sign}</label>
        </div>
      );
    });
    return (
      <div>
        <h1>Gif Horoscope</h1>
        <p style={{ margin: "50px", textAlign: "left", fontSize: "20px" }}>
          My biggest pitfall? Being creative. Finding a "novel" way to display
          data from an API. I could not think of anything novel. Everything's
          been made already basically. How can I be clever about displaying
          data. How could I possibly beat{" "}
          <a href="stheapplebeesondelcoparkdriveinthesuburbsofdaytonopenrightnow.com">
            stheapplebeesondelcoparkdriveinthesuburbsofdaytonopenrightnow.com
          </a>
          ! I thought about using the weather API. But what could I do cleverly?
          Nothing I could think of. I thought about then using the weather API
          to display hot vs cold, its font size depending on how hot or cold it
          is, every time I hover over a country ona map visualization. NO. This
          isnt't a data visualization project, and hot vs cold with different
          font sizes? Boring.
        </p>
        <p style={{ margin: "50px", textAlign: "left", fontSize: "20px" }}>
          After 6 days of mulling over how to be creative, I settled on using
          the horoscope APP provided on the class webiste. The only pizaz I
          could think of, that I could use a free API to do, was give a gif
          horoscope. I mean thats different right? Instead of words, you have
          your gifs of the day? RIGHT?
        </p>
        <p style={{ margin: "50px", textAlign: "left", fontSize: "20px" }}>
          When I finally got to the project, I had a few bugs. One, the giphy
          api response was huge and they gave my like 500 images. Finding the
          correct url to render the moving gif took a bit since i ne ver used it
          before. I kept rendering nothing or still images until I found the
          correct url. Second, the dreaded cors error, which i was never able to
          fix. This wasn't a me problem, more of a problem ace=cessing their
          API. I brought the issue into class, but we never resolved it.
        </p>
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
          {inputs}
          <button>Submit</button>
        </form>
        <div style={this.gifContainer}>{this.state.gifHoroscopes}</div>
      </div>
    );
  }
}

export default gifHoroscopeAPI;
