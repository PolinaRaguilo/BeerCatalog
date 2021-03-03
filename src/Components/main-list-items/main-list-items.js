/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import MainItem from "./main-item/main-item";
import "./main-list-items.css";
import { addFavorite } from "../../Redux/actions/favoriteAction";
import Spinner from "../Spinner/spinner";
import ErrorLoading from "../Error/error-loading";

class MainListItems extends Component {
  addToFavorite = (idBeer) => {
    const beer = this.props.beerData.find((item) => item.id === idBeer);
    const { id, name, tagline, description, image_url } = beer;
    this.props.onFavoriteBeer(id, name, tagline, description, image_url);
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
    return (
      <>
        <InfiniteScroll
          className="infiniteScroll"
          dataLength={this.props.beerData.length}
          next={this.props.onLoadMore}
          hasMore
          loader={<Spinner />}
          // loader={this.props.loadingItems ? <Spinner /> : null}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b> You have seen it all!</b>
            </p>
          }
        >
          <div className="catalog__wrapper">
            {this.props.errorItem ? <ErrorLoading /> : null}
            {/* {this.props.loadingItems ? <Spinner /> : null} */}
            {/* {!(this.props.errorItem || this.props.loadingItems)
              ? beerItems
              : null} */}
            {beerItems}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beerData: state.beerReducer.beers,
    errorItem: state.beerReducer.errorItem,
    loadingItems: state.beerReducer.loadingItems,
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
  errorItem: PropTypes.bool.isRequired,
  // loadingItems: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
