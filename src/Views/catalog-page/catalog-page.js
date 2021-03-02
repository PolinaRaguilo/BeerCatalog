/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainListItems from "../../Components/main-list-items/main-list-items";
import { fetchBeers } from "../../Redux/actions/beerAction";

class CatalogPage extends Component {
  state = {
    page: 1,
    // loadingMore: false,
  };

  // eslint-disable-next-line no-unused-vars
  // handleScroll = () => {
  //   // e.preventDefault();
  //   const lastItem = document.querySelector(
  //     ".catalog__wrapper  .card__wrapper:last-child "
  //   );
  //   // console.log(lastItem);
  //   const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
  //   const pageOffset = window.pageYOffset + window.innerHeight;
  //   const bottomOffset = 20;
  //   if (pageOffset > lastItemOffset - bottomOffset) {
  //     this.onMore();
  //   }
  // };

  onLoadBeersHandler = () => {
    this.props.getBeers(this.state.page);
  };

  componentDidMount = () => {
    this.props.getBeers(this.state.page);
    // this.scrollListener = window.addEventListener("scroll", () => {
    //   this.handleScroll();
    // });
  };

  onMore = () => {
    this.setState(
      (state) => ({
        page: state.page + 1,
      }),
      this.onLoadBeersHandler
    );
  };

  render() {
    return (
      <>
        <MainListItems onLoadMore={this.onMore} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBeers: (page) => dispatch(fetchBeers(page)),
  };
};

const mapStateToProps = (state) => {
  return {
    beersAll: state.beerReducer.beers,
  };
};

CatalogPage.propTypes = {
  getBeers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
