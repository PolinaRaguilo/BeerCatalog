/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./favorite-list-items.css";
import { connect } from "react-redux";
import FavoriteItem from "./favorite-item/favorite-item";
import { deleteFavorite } from "../../Redux/actions/favoriteAction";

class FavoriteListItems extends Component {
  deleteFavorite = (id) => {
    this.props.deleteFromFavorite(id);
  };

  render() {
    const favoriteItems = this.props.favoriteBeers.map((item) => {
      const { id, name, tagline, description, img } = item;
      return (
        <FavoriteItem
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          description={description}
          img={img}
          deleteItem={this.deleteFavorite}
        />
      );
    });
    return (
      <div className="favorite__wrapper">
        <h2 className="favorite__title">Your favorite beer</h2>
        {favoriteItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBeers: state.favoriteReducer.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

FavoriteListItems.propTypes = {
  favoriteBeers: PropTypes.array.isRequired,
  deleteFromFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListItems);
