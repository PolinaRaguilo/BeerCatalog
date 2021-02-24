/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainItem from "./main-item/main-item";
import "./main-list-items.css";

class MainListItems extends Component {
  render() {
    const beerItems = this.props.beerData.map((item) => {
      const { id, name, tagline, image_url } = item;
      return (
        <MainItem
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          img={image_url}
        />
      );
    });
    return <div className="catalog__wrapper">{beerItems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    beerData: state.beerReducer.beers,
  };
};

MainListItems.propTypes = {
  beerData: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(MainListItems);
