import React, { Component } from "react";
import productsData from "./products";
import "../assignment2/card.css";
class ShoppingProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sorted: [],
    };
  }
  componentDidMount() {
    this.setState({ products: productsData, sorted: productsData }, () => {
      console.log(this.state);
    });
  }
  inputHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  sortByRatingLowHigh = () => {
    let sorted = this.state.products.sort((a, b) => a.rating - b.rating);
    this.setState({ sorted });
  };
  sortByRatingHighLow = () => {
    let sorted = this.state.products.sort((a, b) => b.rating - a.rating);
    this.setState({ sorted });
  };
  sortByName = () => {
    let sorted = this.state.products.sort((a, b) => {
      const nameA = a.title.toLowerCase(),
        nameB = b.title.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });

    this.setState({ sorted });
  };
  filterByCategory = (category) => {
    if (category === "none") {
      this.setState({ sorted: productsData });
    } else {
      let filtered = this.state.products.filter((prod) => {
        return prod.type === category;
      });
      this.setState({ sorted: filtered });
    }
  };
  searchName = (searchVal) => {
    let filtered = this.state.products.filter((prod) => {
      return prod.title.includes(searchVal);
    });
    this.setState({ sorted: filtered });
  };

  displayResults = () => {
    let res = this.state.sorted.map((prod) => {
      const { title, type, description, filename, price, rating } = prod;
      return (
        <div className="cardbox">
          <img src={filename} className="card-image" />
          <div className="card-text">
            <h2>{title}</h2>
            <h3>Category : {type}</h3>
            <h3>{description}</h3>
            <h3>Price : {price}</h3>
            <h3>Rating: {rating}</h3>
          </div>
        </div>
      );
    });
    return res;
  };

  render() {
    let res = this.displayResults();
    return (
      <div>
        Shopping products
        <button onClick={this.sortByRatingLowHigh}>
          Sort By Rating Low to High
        </button>
        <button onClick={this.sortByRatingHighLow}>
          Sort By Rating High to Low
        </button>
        <select
          onChange={(e) => {
            this.filterByCategory(e.target.value);
          }}
          name="one"
          className="dropdown-select"
          text="Filter By"
        >
          <option value="none">Filter By None</option>
          <option value="fruit">Fruits</option>
          <option value="dairy">Dairy</option>
          <option value="vegetable">Vegetable</option>
          <option value="bakery">Bakery</option>
        </select>
        <button onClick={this.sortByName}>Sort By Name</button>
        <div style={{ marginBottom: "20px" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(this.state.searchbarVal);
              this.searchName(this.state.searchbarVal);
            }}
          >
            <input
              type="text"
              placeholder="Search products"
              required
              name="searchbarVal"
              onChange={this.inputHandler}
              style={this.stylesInput}
            />
            <button style={this.stylesButton}>Search</button>
          </form>
        </div>
        <div className="card-container-outer">
          <div className="card-container">{res}</div>
        </div>
      </div>
    );
  }
}

export default ShoppingProducts;
