import React, { Component } from "react";
import MainItem from "./main-item/main-item";
import "./main-list-items.css";

class MainListItems extends Component {
  render() {
    return (
      <div className="catalog__wrapper">
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
      </div>
    );
  }
}
export default MainListItems;
