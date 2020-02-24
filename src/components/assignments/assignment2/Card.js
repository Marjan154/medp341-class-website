import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, suit, value, color, image } = this.props;

    return (
      <div class="cardbox">
        <img src={image} className="card-image" />
        <div className="card-text">
          <h3>{suit}</h3>
          <h3>{value}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
