/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainListItems from "../../Components/main-list-items/main-list-items";
import { fetchBeers } from "../../Redux/actions/beerAction";

class CatalogPage extends Component {
  componentDidMount = () => {
    this.props.getBeers();
  };

  render() {
    return (
      <>
        <MainListItems />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBeers: () => dispatch(fetchBeers()),
  };
};

CatalogPage.propTypes = {
  getBeers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CatalogPage);
