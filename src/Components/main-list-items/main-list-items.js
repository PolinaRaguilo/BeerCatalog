/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainItem from "./main-item/main-item";
import "./main-list-items.css";
import { addFavorite } from "../../Redux/actions/favoriteAction";

class MainListItems extends Component {
  addToFavorite = (idBeer) => {
    const beer = this.props.beerData.find((item) => item.id === idBeer);
    const { id, name, tagline, description, img } = beer;
    this.props.onFavoriteBeer(id, name, tagline, description, img);
  };

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
          addFavoriteBeer={this.addToFavorite}
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
const mapDispatchToProps = (dispatch) => {
  return {
    onFavoriteBeer: (id, name, tagline, description, img) =>
      dispatch(addFavorite(id, name, tagline, description, img)),
  };
};
MainListItems.propTypes = {
  beerData: PropTypes.array.isRequired,
  onFavoriteBeer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
