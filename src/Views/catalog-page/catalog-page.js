/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainListItems from "../../Components/main-list-items/main-list-items";
import { fetchBeers } from "../../Redux/actions/beerAction";

class CatalogPage extends Component {
  state = {
    page: 1,
  };

  onLoadBeersHandler = () => {
    this.props.getBeers(this.state.page);
  };

  componentDidMount = () => {
    this.props.getBeers(this.state.page);
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
