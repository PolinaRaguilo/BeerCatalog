/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-debugger */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./favorite-list-items.css";
import { connect } from "react-redux";
import { Pagination } from "@material-ui/lab";
import FavoriteItem from "./favorite-item/favorite-item";
import { deleteFavorite } from "../../Redux/actions/favoriteAction";

class FavoriteListItems extends Component {
  state = {
    currPage: 1,
  };

  deleteFavorite = (id) => {
    this.props.deleteFromFavorite(id);
  };

  onChangePage = (page) => {
    this.setState({ currPage: page });
  };

  render() {
    const indexOfLastPost = this.state.currPage * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentItems = this.props.favoriteBeers.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    const favoriteItems = currentItems.map((item) => {
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
        <Pagination
          count={Math.ceil(this.props.favoriteBeers.length / 5)}
          color="primary"
          onChange={() => this.onChangePage(this.page)}
          className={
            this.props.favoriteBeers.length <= 5
              ? "pagination__none"
              : "pagination__show"
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBeers: state.favoriteReducer.favorites,
    beersData: state.beerReducer.beers,
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
