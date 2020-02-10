import React, { Component } from "react";
import cards from "./cards.json";
import Card from "./Card";

class ShuffleDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      shuffledDeck: [],
      players: 1,
      dealtCards: {}
    };
  }

  componentDidMount() {
    let deck = cards.map(card => (
      <div key={card.suit[0] + card.value}>
        <Card
          suit={card.suit}
          value={card.value}
          id={card.suit[0] + card.value}
        />
      </div>
    ));
    this.setState({ deck, shuffledDeck: deck });
  }

  handlePlayers = event => {
    this.setState(
      {
        players: event.target.value
      },
      () => {
        console.log(this.state.players);
      }
    );
  };

  dealCards = e => {
    e.preventDefault();
    const { players, shuffledDeck } = this.state;
    let playHands = {};
    let count = 0;
    while (count < 7 && shuffledDeck.length > players) {
      for (let i = 0; i < players; i++) {
        let card = this.getCard();
        console.log(card);
        playHands[i] === undefined
          ? (playHands[i] = [card])
          : playHands[i].push(card);
      }
      count++;
    }
    console.log(playHands);
    this.setState({ dealtCards: playHands });
  };

  getCard = () => {
    let shuffledDeck = this.state.shuffledDeck;
    let card = shuffledDeck.pop();
    console.log(card);
    this.setState({ shuffledDeck });
    return card;
  };

  farroShuffle = () => {
    const { shuffledDeck } = this.state;
    let len = shuffledDeck.length;
    let half1 = shuffledDeck.slice(0, len / 2) || [];
    let half2 = shuffledDeck.slice(len / 2, len) || [];
    let playDeck = [];
    for (let i = 0; i < half1.length; i++) {
      playDeck.push(half1[i]);
      playDeck.push(half2[i]);
    }
    this.setState({ shuffledDeck: playDeck });
  };

  reset = () => {
    this.setState({ shuffledDeck: this.state.deck });
  };
  render() {
    let myDeck = this.state.shuffledDeck.map(card => <div>{card}</div>);
    let playerCards = [];
    const { dealtCards } = this.state;
    for (let player in dealtCards) {
      let playerBox = (
        <div>
          <h1>Player {parseInt(player) + 1}</h1>
          <div className="card-container">{dealtCards[player]}</div>
        </div>
      );
      playerCards.push(playerBox);
    }
    console.log(playerCards);
    return (
      <div>
        <div>MYDECK</div>

        <form onSubmit={this.dealCards}>
          <label>
            Number of Players:
            <input
              onChange={this.handlePlayers}
              type="text"
              pattern="[0-9]*"
              name="player_amount"
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <button onClick={this.farroShuffle}>Farro Shuffle</button>
        <button onClick={this.reset}>Reset</button>

        {playerCards.length && (
          <div>
            <h1>PLAYER CARDS</h1>
            {playerCards}
          </div>
        )}

        <h1>THE DECK OF CARDS</h1>
        <div className="card-container-outer">
          <div className="card-container">{myDeck}</div>
        </div>
      </div>
    );
  }
}

export default ShuffleDeck;
