/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
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

  onChangePage = (e, page) => {
    this.setState({ currPage: page });
  };

  render() {
    const currArr = [];
    const indexOfLastPost = this.state.currPage * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentIdArr = this.props.favoritesId.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    // eslint-disable-next-line no-unused-vars
    const currentItems = this.props.dataBeers.filter((item) => {
      for (let i = 0; i < currentIdArr.length; i++) {
        if (item.id === currentIdArr[i]) {
          currArr.push(item);
        }
      }
    });
    const favoriteItems = currArr.map((item) => {
      const { id, name, tagline, description, image_url } = item;
      return (
        <FavoriteItem
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          description={description}
          img={image_url}
          deleteItem={this.deleteFavorite}
        />
      );
    });
    return (
      <div className="favorite__wrapper">
        <h2 className="favorite__title">Your favorite beer</h2>
        {favoriteItems}
        {this.props.favoritesId.length >= 5 && (
          <Pagination
            count={Math.ceil(this.props.favoritesId.length / 5)}
            color="primary"
            onChange={(e, page) => this.onChangePage(e, page)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesId: state.favoriteReducer.favoritesId,
    dataBeers: state.beerReducer.beers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

FavoriteListItems.propTypes = {
  favoritesId: PropTypes.array.isRequired,
  deleteFromFavorite: PropTypes.func.isRequired,
  dataBeers: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListItems);
