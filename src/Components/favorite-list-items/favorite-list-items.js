import React, { Component } from "react";
import "./favorite-list-items.css";
import FavoriteItem from "./favorite-item/favorite-item";

class FavoriteListItems extends Component {
  render() {
    return (
      <div className="favorite__wrapper">
        <h2 className="favorite__title">Your favorite beer</h2>
        <FavoriteItem />
      </div>
    );
  }
}

export default FavoriteListItems;
