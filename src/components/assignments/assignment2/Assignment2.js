import React, { Component } from "react";
import data from "./cards.json";
import Card from "./Card";

const data_cards = data;
class ShuffleDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      shuffledDeck: [],
      players: 1,
      dealtCards: {},
      displayDeck: []
    };
  }

  componentDidMount() {
    let deck = Array.from(data);
    this.setState({ deck, shuffledDeck: deck });
  }

  handlePlayers = event => {
    this.setState({
      players: event.target.value > 10 ? 10 : event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        shuffledDeck: Array.from(this.state.deck),
        dealtCards: {}
      },
      () => {
        this.dealCards();
      }
    );
  };

  dealCards = () => {
    const { players, shuffledDeck } = this.state;
    let playHands = {};
    let count = 0;
    while (count < 5 && shuffledDeck.length > players) {
      for (let i = 0; i < players; i++) {
        let card = this.getCard();
        playHands[i] === undefined
          ? (playHands[i] = [card])
          : playHands[i].push(card);
      }
      count++;
    }
    this.setState({ dealtCards: playHands });
    document.getElementById("player_amount_field").reset();
  };

  getCard = () => {
    let a_deck = this.state.shuffledDeck;
    let card = a_deck.pop();
    this.setState({ shuffledDeck: a_deck });
    // debugger;
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

  firstLastShuffle = () => {
    const { shuffledDeck } = this.state;
    let len = shuffledDeck.length;
    let shuffled = [];
    for (let i = 0; i < len / 2; i++) {
      shuffledDeck[len - i - 1] && shuffled.push(shuffledDeck[len - i - 1]);
      shuffled.push(shuffledDeck[i]);
    }
    this.setState({ shuffledDeck: shuffled });
  };

  reset = () => {
    this.setState({
      shuffledDeck: Array.from(this.state.deck),
      dealtCards: {},
      players: 1
    });
    document.getElementById("player_amount_field").reset();
  };
  render() {
    let myDeck = this.state.shuffledDeck.map(card => (
      <div key={card.suit[0] + card.value}>
        <Card
          suit={card.suit}
          value={card.value}
          id={card.suit[0] + card.value}
        />
      </div>
    ));

    let playerCards = [];
    const { dealtCards } = this.state;
    for (let player in dealtCards) {
      const playerHand = dealtCards[player].map(card => (
        <div key={card.suit[0] + card.value}>
          <Card
            suit={card.suit}
            value={card.value}
            id={card.suit[0] + card.value}
          />
        </div>
      ));
      const playerBox = (
        <div>
          <h1>Player {parseInt(player) + 1}</h1>
          <div className="card-container">{playerHand}</div>
        </div>
      );
      playerCards.push(playerBox);
    }
    const pcards =
      this.state.players && playerCards.length ? (
        <div>
          <div>
            <h1>Cards for {this.state.players} players:</h1>
            {playerCards}
          </div>
        </div>
      ) : (
        <div></div>
      );
    return (
      <div>
        <h1>Shuffle Deck Assignment</h1>

        <form onSubmit={this.handleSubmit} id="player_amount_field">
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
          <input type="submit" value="Deal Cards" />
        </form>
        <br />
        <button onClick={this.farroShuffle}>Farro Shuffle</button>
        <button onClick={this.firstLastShuffle}>Other shuffle</button>
        <button onClick={this.reset}>Reset</button>
        {pcards}

        <h1>THE DECK OF CARDS</h1>
        <h2>{myDeck.length} cards</h2>
        <div className="card-container-outer">
          <div className="card-container">{myDeck}</div>
        </div>
      </div>
    );
  }
}

export default ShuffleDeck;
